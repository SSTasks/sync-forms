import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Interview } from 'src/app/state';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StatisticsService } from '../../statistics.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'selected-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {

  interview: Interview;
  @Output() hide: EventEmitter < Event > = new EventEmitter();
  
  @ViewChild('paginator') paginator: MatPaginator;

  actions: MatTableDataSource < object > ;
  headers: String[];
  subscription: Subscription;

  constructor(public statisticService: StatisticsService ) { }

  ngOnInit() {
    this.subscription = this.statisticService.getSelectedInterview()
      .subscribe( interview => {
        if(interview){
          this.interview = interview;
          this.renderInterviewsList(this.interview.actions);
        }        
      });

    this.headers = this.columns.map(field => field.title);
  }

  ngAfterViewInit(){
    this.actions.paginator = this.paginator;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private renderInterviewsList(dataSource): void {
    this.actions = this.initDataSource(dataSource, this.paginator);
  }

  private initDataSource(data, paginator): MatTableDataSource < object > {
    let dataSource = new MatTableDataSource(data);
    dataSource.paginator = paginator;

    return dataSource;
  }

  columns: Array < any > = [{
          title: 'action',
          value: 'Action',
          icon: 'timer'
      },
      {
          title: 'time',
          value: 'Time',
          icon: 'timer_off'
      },
      {
          title: 'author',
          value: 'Author'
      },
      {
          title: 'role',
          value: 'Role'
      },
      {
          title: 'targetTag',
          value: 'Target Element'
      },
      {
          title: 'targetLabel',
          value: 'Target Label'
      },
      {
          title: 'newValue',
          value: 'New value'
      }
  ];
}
