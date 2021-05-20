import { EmployeeRole } from './employee-role';

export const EmployeeAllocation: Record<number, number> = {
  [EmployeeRole.Developer]: 1000,
  [EmployeeRole.Tester]: 500,
  [EmployeeRole.Manager]: 300,
}
