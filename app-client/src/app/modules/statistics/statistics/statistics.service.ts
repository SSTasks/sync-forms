import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '../../../store';
import { Interview } from '../../../state';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()

export class StatisticsService {

    selectedInterview: BehaviorSubject < Interview > ;

    getInterviews$: Observable < Interview[] > = this.http
        .get('/stats/interviews')
        .pipe(map(res => {
            return res.json();
        }))
        .pipe(tap(next => this.store.set('interviews', next)));

    constructor(
        private http: Http,
        private store: Store
    ) {
        this.selectedInterview = new BehaviorSubject(null);
    }

    getSelectedInterview(): Observable < any > {
        return this.selectedInterview.asObservable();
    }

    setSelectedInterview(interview): void {
        this.selectedInterview.next(interview);
    }
}