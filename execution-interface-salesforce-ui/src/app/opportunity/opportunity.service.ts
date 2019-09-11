import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IOpportunity } from './opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  private opportunityUrl = 'https://gist.githubusercontent.com/pks90/bbf04c684cb665d5884b41118dae601a/raw/0653de39ee7741777e69c3107a3b5ab053db733d/resp.json';

  constructor(private http: HttpClient) { }

  getOpportunities(): Observable<IOpportunity[]> {
    return this.http.get<IOpportunity[]>(this.opportunityUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getOpportunity(id: number): Observable<IOpportunity | undefined> {
    return this.getOpportunities().pipe(
      map((products: IOpportunity[]) => products.find(p => p.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
