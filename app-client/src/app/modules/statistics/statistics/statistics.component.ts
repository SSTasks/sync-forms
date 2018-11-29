import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { Interview } from '../../../state';
import { Store } from '../../../store';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit, OnDestroy {

    @ViewChild('interviewsPaginator') interviewsPaginator: MatPaginator;

    interviewsSource: MatTableDataSource < object > ;
    interviewsColumnsHeaders: String[];
    selectedInterview: Interview;
    interviews$: Observable<Interview[]> | any;
    private subscription: Subscription;
    private selectedSubscription: Subscription;
    
    constructor(
        private store: Store,
        private statisticService: StatisticsService
        ) {}

    public title = 'Interviews statistic';
    public details = 'Interview details';
        
    ngOnInit() {
        this.interviews$ = this.store.select('interviews');
        this.subscription = this.statisticService.getInterviews$.subscribe();
        this.interviewsColumnsHeaders = this.interviewColumns.map(field => field.title);

        this.selectedSubscription = this.statisticService.getSelectedInterview()
            .subscribe(interview => this.selectedInterview = interview);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.selectedSubscription.unsubscribe();
        this.unselectItem();
    }

    selectInterview(item){
        this.statisticService.setSelectedInterview(item);
    }

    unselectItem() {
        this.statisticService.setSelectedInterview(null);
    }

    interviewColumns: Array < any > = [
        {
            title: 'startTime',
            value: 'Start Time',
            icon: 'timer',
            pipe: ''
        },
        {
            title: 'endTime',
            value: 'End Time',
            icon: 'timer_off'
        },
        {
            title: 'candidate',
            value: 'Candidate'
        },
        {
            title: 'interviewer',
            value: 'Interviewer'
        },
        {
            title: 'formTitle',
            value: 'Form title'
        },
        {
            title: 'info',
            value: 'Info',
            icon: 'pageview'
        }
    ];
}

