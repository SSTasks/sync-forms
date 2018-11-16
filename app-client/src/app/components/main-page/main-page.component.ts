import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpService} from '../../forms/services/http.service';
import {Form} from '../../forms/services/form';
import {MatTableDataSource} from '@angular/material';
import { BroadcastService } from '../../forms/services/broadcast.service';
import { SocketService } from '../../forms/services/socket-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

  providers: [],
})
export class MainPageComponent implements OnInit, OnDestroy {
  // public forms: Form[];
  public forms;
  private unsubUpdateTable;
  // displayedColumns = ['author', 'groups', 'title'];
  displayedColumns = ['interviewer', 'formName', 'creationTime'];
  formsSource: MatTableDataSource < object > ;
  selectedRowIndex = -1; 
  mode = new FormControl('over');
  
  constructor(private http: HttpService,
              private socketService: SocketService,
              private broadcast: BroadcastService,
              private router: Router) { }

  renderUsersList() {
    this.formsSource = this.initDataSource(this.forms);
  }

  initDataSource(data): MatTableDataSource < object > {
    let dataSource = new MatTableDataSource(data);
    return dataSource;
  }

  highlight(row) {
    this.selectedRowIndex = row.interviewId;
    this.broadcast.selectForm(row.interviewForm);
    this.socketService.setInterviewId(row.interviewId);
  }

  updateTable() {
    return this.socketService.updateInterviewList()
        .subscribe(tableData => {
          this.forms = tableData;
          this.renderUsersList();
          this.selectedRowIndex = -1;
      });
  }

  startInterview() {
    this.router.navigate(['/interview-page']);
  }

  ngOnInit() {
    this.socketService.connectToSockets();

    this.http.getAvailableInterviews()
      .subscribe(data => {
          this.forms = data;
          this.renderUsersList();
          console.log(this.formsSource);
      });

    this.unsubUpdateTable = this.updateTable();
  }

  ngOnDestroy() {
    if (this.unsubUpdateTable) {
      this.unsubUpdateTable.unsubscribe();
    }
  }
}

// https://medium.com/codingthesmartway-com-blog/angular-material-part-4-data-table-23874582f23a
