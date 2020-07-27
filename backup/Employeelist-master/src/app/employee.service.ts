import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee }  from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable()
export class EmployeeService {



  constructor(private http :HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    const url = "https://jsonplaceholder.typicode.com/posts/"
    
    return this.http.get<IEmployee[]>(url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error") 
  }

  
}
