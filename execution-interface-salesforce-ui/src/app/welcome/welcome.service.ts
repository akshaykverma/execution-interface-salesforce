import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IWelcome } from "./welcome";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

/**
 * Handles the fetching of backend data 
 * related to the menu items and user information.
 */
@Injectable({
    providedIn: 'root'
})
export class WelcomeDataService {

    /**
     * Service backend URL
     */
    private serviceUrl = 'https://gist.githubusercontent.com/akshaykverma/b714aa1bd6fac80c565a202d7c81e811/raw/2f15a42db24bd5722c4b2ac82a72273a75e97fc0/user-data.json';

    /**
     * Service Constructor for dependency injection
     * @param http injected to fetch data from {@link serviceUrl}
     */
    constructor(private http: HttpClient) {}

    /**
     * Gets the welcome page data from the backend service
     */
    getWelcomePageData(): Observable<IWelcome> {
        return this.http.get<IWelcome>(this.serviceUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    /**
     * Error handler when fetching data from backend service
     * @param err contains the error
     */
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