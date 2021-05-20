import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeesDepartment } from '../+state/employyes/employees-department.models';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Employee } from '@prisma/client';
import { EmployeeAllocation } from '../constants/employee-allocation';
import { EmployeeRole } from '../constants/employee-role';

interface EmployeeTree {
  name: string;
  employeesAmount: number;
  children?: EmployeeTree[];
}

@Component({
  selector: 'departments-allocation-tree',
  templateUrl: './allocation-tree.component.html',
  styleUrls: ['./allocation-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllocationTreeComponent {
  @Input() public set employeesByDepartments(employeesByDepartments: EmployeesDepartment[] | null) {
    if (employeesByDepartments == null) {
      return;
    }

    this.dataSource.data = employeesByDepartments.map(
      (employeesByDepartment) => {
        return {
          name: employeesByDepartment.name,
          employeesAmount: employeesByDepartment.employeesAmount,
          children: this.prepareTree(employeesByDepartment.employees),
        };
      }
    );
  }

  treeControl = new NestedTreeControl<EmployeeTree>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<EmployeeTree>();

  hasChild = (_: number, node: EmployeeTree) => !!node.children && node.children.length > 0;

  private prepareTree(data: Employee[]): EmployeeTree[] {
    const nest = (items: Employee[], id: number | null = null): EmployeeTree[] => {
      return (
        items
          .filter((item: Employee) => item.referenceManager === id)
          .map((item) => {
            const filtered = items.filter((i) => i.id !== item.id);

            return {
              name: item.name,
              employeesAmount: this.getEmployeesAmount(item.role, filtered),
              children: nest(filtered, item.id)
            };
          })
      );
    };

    return nest(data);
  }

  private getEmployeesAmount(role: EmployeeRole, data: Employee[]): number {
    if (role === EmployeeRole.Manager) {
      return data.reduce((acc, item) => acc + EmployeeAllocation[item.role], 0)
    }

    return EmployeeAllocation[role];
  }
}
