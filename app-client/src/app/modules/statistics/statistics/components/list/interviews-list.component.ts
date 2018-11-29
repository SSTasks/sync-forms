import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Interview } from 'src/app/state';

@Component({
  selector: 'interviews-list',
  templateUrl: './interviews-list.component.html',
  styleUrls: ['./interviews-list.component.scss']
})
export class IntreviewsListComponent implements OnInit {
  @Input() interviews$: any;
  @Input() columns: any;
  @Input() headers: any;
  @Output() selectInterview: EventEmitter < Interview > = new EventEmitter();

  dataSource: any;

  interviewsSource: MatTableDataSource < object > ;
  @ViewChild('interviewsPaginator') interviewsPaginator: MatPaginator;
  
  constructor() {}
  
  ngOnInit() {
    this.interviews$
      .subscribe(
        interviews => this.renderInterviewsList(interviews)
      )
  }

    

  private renderInterviewsList(dataSource): void {
    this.interviewsSource = this.initDataSource(dataSource, this.interviewsPaginator);
  }

  private initDataSource(data, paginator): MatTableDataSource < object > {
    let dataSource = new MatTableDataSource(data);
    dataSource.paginator = paginator;

    return dataSource;
  }

  selectItem(item){
    this.selectInterview.emit(item);
  }
}
