import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {
  interviewsSource: MatTableDataSource < object > ;
  interviewsColumnsHeaders: String[];
  @ViewChild('interviewsPaginator') interviewsPaginator: MatPaginator;
  constructor() {}

  public title: string = "Interviews statistic";
  public panelOpenState: boolean = false;
  public dataSource: any[] = [{
          id: 1,
          startTime: '11:32',
          endTime: '11:45',
          candidate: 'Alexey',
          interviewer: 'Happy Man',
          formTitle: 'Registration Form',
          logInOut: 'Expand to view',
          actions: 'Expand',
          comments: 'Expand'
      },
      {
          id: 2,
          startTime: '11:57',
          endTime: '12:03',
          candidate: 'Ehor',
          interviewer: 'Валера',
          formTitle: 'Registration Form',
          logInOut: 'Expand to view',
          actions: 'Expand',
          comments: 'Expand'
      },
      {
          id: 3,
          startTime: '12:54',
          endTime: '13:20',
          candidate: 'Donald',
          interviewer: 'epicmaster',
          formTitle: 'Registration Form',
          logInOut: 'Expand to view',
          actions: 'Expand',
          comments: 'Expand'
      }
  ]
  
  ngOnInit() {
      this.interviewsColumnsHeaders = this.interviewColumns.map(field => field.title);
      this.renderInterviewsList();
  }
  
  ngAfterViewInit() {
      this.interviewsSource.paginator = this.interviewsPaginator;
  }
  
  private renderInterviewsList(): void {
      this.interviewsSource = this.initDataSource(this.dataSource, this.interviewsPaginator);
  }
  
  private initDataSource(data, paginator): MatTableDataSource < object > {
      let dataSource = new MatTableDataSource(data);
      dataSource.paginator = paginator;
  
      return dataSource;
  }
  
  interviewColumns: Array < any >= [{
          title: 'id',
          value: 'Interview id',
      },
      {
          title: 'startTime',
          value: 'Start Time',
          icon: 'timer'
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
