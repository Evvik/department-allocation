import { Module } from '@nestjs/common';
import { EmployeesModule } from '@departments/employees';

@Module({
  imports: [EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
