import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

import {Form} from './form';
import {BroadcastService} from './broadcast.service';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    public forms: Form[];

    constructor(private http: HttpClient, private broadcast: BroadcastService) {}

    // http get all the forms
    public getAllForms(): Observable<Form[]> {
        return this.http.get<Form[]>('/form')
            .pipe(
                tap(forms => {
                    console.log(forms);
                    this.forms = forms;
                }),
                catchError(this.handleError('addForm', []))
            );
    }

    // add or update current form
    public saveForm(form): Observable<Form[]> {
        if (!form._id) {
            console.log('add', form);
            return this.http.post<Form[]>('/form', form)
                .pipe(
                    tap(forms => {
                        if (Array.isArray(forms)) {
                            console.log(forms);
                            this.forms = forms;
                        } 
                    }),
                    catchError(this.handleError('addForm', []))
                );
        } else {
            console.log('update', form);
            return this.http.put<Form[]>('/form', form)
                .pipe(
                    tap(forms => {
                        console.log(forms);
                        this.forms = forms;
                    }),
                    catchError(this.handleError('updateForm', []))
                );
        }
    }

    // http delete current form
    public delForm(id): Observable<Form[]> {
        console.log(id);
        return this.http.delete<Form[]>(`/form/${id}`)
            .pipe(
                tap(forms => {
                    console.log(forms);
                    this.forms = forms;
                    this.broadcast.currentForms(forms);
                }),
                catchError(this.handleError('delForm', []))
            );
    }

    public getAvailableInterviews() {
        return this.http.get('/interviews')
            .pipe(
                tap(interviews => {
                    console.log(interviews);
                }),
                catchError(this.handleError('getInterview', []))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

   postScreenshotData (imgData) {
      return this.http.post('/screenshot', imgData);
   }

   deleteScreenshotData (imgName) {
      console.log(imgName);
      return this.http.delete(`/screenshot/${imgName}`);
   }

}
