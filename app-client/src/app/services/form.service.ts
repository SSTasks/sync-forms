import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(private http: HttpClient) {}

    getAllForms() {
        return this.http.get('/forms') 
    }

    addNewForm(title, preview, groups, elements, description) {
        return this.http.post('/forms', {title, preview, groups, elements, description})
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        }
    }
}

