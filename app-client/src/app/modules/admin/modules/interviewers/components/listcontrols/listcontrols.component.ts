import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-controls',
  templateUrl: './listcontrols.component.html',
  styleUrls: ['./listcontrols.component.scss']
})

export class ListControls {
  @Output() onAdd: EventEmitter < boolean > = new EventEmitter();

  add() {
      this.onAdd.emit(true);
  }
}