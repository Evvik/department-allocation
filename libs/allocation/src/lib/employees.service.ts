import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Employee } from '@prisma/client';

const FETCH_EMPLOYEES = gql`
  query {
    employees {
      id,
      name,
      role,
      referenceManager,
      departmentName,
      departmentId
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private apollo: Apollo) {}

  public fetchEmployees(): Observable<Array<Employee>> {
    return this.apollo
      .query({query: FETCH_EMPLOYEES})
      .pipe(
        pluck('data'),
        pluck('employees'),
      );
  }
}
