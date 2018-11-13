import { Component } from '@angular/core';
@Component({
  selector: 'group-dialog',
  templateUrl: './group.dialog.html',
  styleUrls: ['./group.dialog.scss']
})

export class GroupDialogComponent {

  fields: Object = [{
          title: 'name',
          value: 'Group name',
          tooltip: 'A-z, space, dash, length: 3-15 symbols'
      },
      {
          title: 'description',
          value: 'Description',
          tooltip: 'A-z, length: 0-30 symbols'
      }
  ]
}
