import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  public REST_API_SERVER = ' http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' 
      // Authorization: 'my-auth-token'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getProfile(): Observable<any> {
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
    .get<any>(url, this.httpOptions);
  }

  public addProfile(data: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
    .post<any>(url, data, this.httpOptions);
  }

//   private handleError(error: HttpErrorResponse) {
//     if (error.status === 0) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong.
//       console.error(
//         `Backend returned code ${error.status}, body was: `, error.error);
//     }
//     // Return an observable with a user-facing error message.
//     return throwError(() => new Error('Something bad happened; please try again later.'));
//   }
}
