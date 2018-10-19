import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {Team} from './team';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {}

    // http get any pet
    public getTeam(): Observable<Team[]> {
        return this.http.get<Team[]>('/team')
            .pipe(
                tap(team => console.log(team)),
                catchError(this.handleError('getTeam', []))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

