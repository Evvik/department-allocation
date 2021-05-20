import { Query, Resolver } from '@nestjs/graphql';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private employeesService: EmployeesService) {}

  @Query(() => [Employee])
  employees(): Promise<Employee[]> {
    return this.employeesService.getEmployees();
  }
}
