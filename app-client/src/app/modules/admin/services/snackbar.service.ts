import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }

  public show(message): void {
    this.snackBar.open(message, '', {
        duration: 1500,
    });
  }
}
