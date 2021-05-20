import { Test } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

describe('EmployeesController', () => {
  let controller: EmployeesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EmployeesService],
      controllers: [EmployeesController],
    }).compile();

    controller = module.get(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
