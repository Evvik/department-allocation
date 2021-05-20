import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as EmployeesActions from './employees.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeesService } from '../../employees.service';

@Injectable()
export class EmployeesEffects {
  fetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.fetchEmployees),
      switchMap(() => {
        return this.employeesService.fetchEmployees().pipe(
          map((employees) => EmployeesActions.fetchEmployeesSuccess({ employees })),
          catchError((error) => of(EmployeesActions.fetchEmployeesFailure({ error }))),
        )
      })
    )
  );

  constructor(private actions$: Actions, private employeesService: EmployeesService) {}
}
