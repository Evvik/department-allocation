import { Injectable } from '@nestjs/common';
import { PrismaClient, Employee } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
  public getEmployees(): Promise<Employee[]> {
    return prisma.employee.findMany();
  }
}
