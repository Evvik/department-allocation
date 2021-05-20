import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import * as EmployeesActions from '../+state/employyes/employees.actions';
import * as EmployeesSelectors from '../+state/employyes/employees.selectors';
import { select, Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { EmployeesDepartment } from '../+state/employyes/employees-department.models';

@Component({
  selector: 'departments-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {
  public readonly employeesByDepartments$: Observable<EmployeesDepartment[]>;
  public readonly employeesLoaded$: Observable<boolean>;

  constructor(private actions$: Actions, private store: Store) {
    this.employeesByDepartments$ = this.store.pipe(select(EmployeesSelectors.getEmployeesByDepartments));
    this.employeesLoaded$ = this.store.pipe(select(EmployeesSelectors.getEmployeesLoaded));
  }

  ngOnInit(): void {
    this.employeesLoaded$.pipe(
      tap((isLoaded) => {
        if (!isLoaded) {
          this.store.dispatch(EmployeesActions.fetchEmployees());
        }
      }),
      take(1),
    ).subscribe();
  }

}
