import { createAction, props } from '@ngrx/store';
import { Employee } from '@prisma/client';

export const fetchEmployees = createAction(
  '[Employees/API] Fetch Employees'
);

export const fetchEmployeesSuccess = createAction(
  '[Employees/API] Fetch Employees Success',
  props<{ employees: Employee[] }>()
);

export const fetchEmployeesFailure = createAction(
  '[Employees/API] Fetch Employees Failure',
  props<{ error: any }>()
);
