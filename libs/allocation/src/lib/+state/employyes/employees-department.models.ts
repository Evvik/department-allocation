import { Employee } from "@prisma/client";

export interface EmployeesDepartment {
  id: number;
  name: string;
  referenceManager: number | null;
  employeesAmount: number;
  employees: Employee[];
}
