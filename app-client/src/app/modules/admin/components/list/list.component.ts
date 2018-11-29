import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpAdminService } from '../../services/http.service';

@Component({
  selector: 'interviewers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() dataSource: any;
  @Input() columns: any;
  @Input() headers: any;
  constructor(public http: HttpAdminService) {}

  selectedGroup = this.http.selectedGroup;

  ngOnInit() {
      this.http.getSelectedGroup()
          .subscribe();
  }

  @Output() onAdd: EventEmitter < boolean > = new EventEmitter();
  @Output() selectGroup: EventEmitter < Object > = new EventEmitter();
  @Output() contextMenu: EventEmitter < Object > = new EventEmitter();


  add() {
      this.onAdd.emit(true);
  }

  select(event, item) {
    let eventObject = {event, item};
    this.selectGroup.emit(eventObject);
  }

  editContextMenu(event, item) {
      let eventObject = {event, item}
      this.contextMenu.emit(eventObject);
  }
}
