import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EMPLOYEES_FEATURE_KEY,
  State,
  employeesAdapter,
} from './employees.reducer';
import { EmployeeAllocation } from '../../constants/employee-allocation';
import { EmployeesDepartment } from './employees-department.models';

// Lookup the 'Employees' feature state managed by NgRx
export const getEmployeesState = createFeatureSelector<State>(
  EMPLOYEES_FEATURE_KEY
);

const { selectAll, selectEntities } = employeesAdapter.getSelectors();

export const getEmployeesLoaded = createSelector(
  getEmployeesState,
  (state: State) => state.loaded
);

export const getEmployeesError = createSelector(
  getEmployeesState,
  (state: State) => state.error
);

export const getAllEmployees = createSelector(
  getEmployeesState,
  (state: State) => selectAll(state)
);

export const getEmployeesEntities = createSelector(
  getEmployeesState,
  (state: State) => selectEntities(state)
);

export const getEmployeesByDepartments = createSelector(
  getAllEmployees,
  (employees) => {
    return employees.reduce((acc: EmployeesDepartment[], item) => {
      const index = acc.findIndex((accItem) => accItem.id === item.departmentId);

      if (index < 0) {
        return [...acc, {
          id: item.departmentId,
          name: item.departmentName,
          referenceManager: item.referenceManager == null ? item.id : null,
          employeesAmount: EmployeeAllocation[item.role],
          employees: [item],
        }];
      }

      acc[index] = {
        id: item.departmentId,
        name: item.departmentName,
        referenceManager: acc[index].referenceManager == null && item.referenceManager == null ? item.id : acc[index].referenceManager,
        employeesAmount: acc[index].employeesAmount + EmployeeAllocation[item.role],
        employees: [...acc[index].employees, item],
      }

      return acc;
    }, [])
  }
);
