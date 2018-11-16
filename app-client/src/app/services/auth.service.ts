import { Injectable, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new EventEmitter();

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<any>('/users/auth', { username: username, password: password })
            .pipe(map(user => {
                this.user.emit(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        window.localStorage.clear();
        this.user.emit({});
        return this.http.get<any>('/users/logout')
    }

    subscriber() {
        return this.user;
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }
}

