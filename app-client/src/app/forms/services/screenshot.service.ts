import { Injectable, EventEmitter } from '@angular/core';
import html2canvas from 'html2canvas';
import { SnackbarComponent } from 'src/app/options/snackbar/snackbar.component';
import { HttpService } from './http.service';
import { BroadcastService } from './broadcast.service';



@Injectable({
  providedIn: 'root'
})
export class ScreenshotService {
   public HTMLElement: string;
   private fileSaveResult = new EventEmitter();

  constructor(private http: HttpService,
              private snackbarComponent: SnackbarComponent,
              private broadcastService: BroadcastService) { }


   saveScreenshot (form) { 
      html2canvas (this.HTMLElement, {
         scale: 0.3
      })
      .then(canvas => {
         let imgFile = canvas.toDataURL();
         this.http.postScreenshotData({'imgFile': imgFile, 'fileName': form.preview})
         .subscribe((isFileSaved) => { 
            this.showSaveMessage(form.title, isFileSaved);
         });
      });
   }

   isScreenshotSaved (response?) {
      return this.fileSaveResult;
    }

   showSaveMessage(title, isAllSaved) {
      if (isAllSaved) {
         this.snackbarComponent.openSnackBar(`${title} has been saved`, 'success');
      } else {
         this.snackbarComponent.openSnackBar(`${title} has not been saved`, 'fail');
      }
   }
    
   deleteScreenshot (form) {
      this.http.deleteScreenshotData(form.preview)
         .subscribe((isFileDeleted) => {
            this.showDeleteMessage(form.title, isFileDeleted);
         });
   }

   showDeleteMessage(title, isAllSaved) {
      if (isAllSaved) {
         this.snackbarComponent.openSnackBar(`${title} has been removed`, 'success');
      } else {
         this.snackbarComponent.openSnackBar(`${title} has not been removed`, 'fail');
      }
   }
}

