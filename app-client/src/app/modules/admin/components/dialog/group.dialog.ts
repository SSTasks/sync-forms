import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'group-dialog',
  templateUrl: './group.dialog.html',
  styleUrls: ['./group.dialog.scss']
})

export class GroupDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

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
