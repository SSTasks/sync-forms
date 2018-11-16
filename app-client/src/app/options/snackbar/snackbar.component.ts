import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, messageType: string, durationTime: number = 3000, action?: string): void {
   let messageCenter = 'snackbar-font-center';
   let success = 'snackbar-success';
   let fail = 'snackbar-fail';
   let msgStyle = (messageType === 'success') ? success :
                  (messageType === 'fail') ? fail : '' ;
   let config = new MatSnackBarConfig();

   config.panelClass = [messageCenter, msgStyle];
   config.duration = durationTime,
   this.snackBar.open(message, action, config);
 }
}
