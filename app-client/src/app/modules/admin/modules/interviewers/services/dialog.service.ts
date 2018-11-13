import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GroupDialogComponent } from '../components/dialog/group.dialog';
import { UsersDialogComponent } from '../components/dialog/users.dialog';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  addGroup(): MatDialogRef < GroupDialogComponent > {
      return this.dialog.open(GroupDialogComponent);
  }
  
  addUser(): MatDialogRef < UsersDialogComponent > {
      return this.dialog.open(UsersDialogComponent);
  }

}
