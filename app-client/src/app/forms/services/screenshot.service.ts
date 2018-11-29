import { Injectable, EventEmitter } from '@angular/core';
import html2canvas from 'html2canvas';
import { SnackbarComponent } from 'src/app/options/snackbar/snackbar.component';
import { HttpService } from './http.service';
import {Form} from './form';

// type screenshotFile = {imgFile: String, fileName: String};

@Injectable({
   providedIn: 'root'
})
export class ScreenshotService {
   public HTMLElement: string;
   
   
   constructor(private http: HttpService,
               private snackbarComponent: SnackbarComponent,
               ) { }
      
      
   saveScreenshot (form: Form): void { 
      let imgData: {imgFile: string, fileName: string}; 
      html2canvas (this.HTMLElement, {
         scale: 0.3
      })
         .then(canvas => {
            let imgFile: string = canvas.toDataURL();

            imgData = {'imgFile': imgFile, 'fileName': form.preview};

            this.http.postScreenshotData(imgData)
               .subscribe((isFileSaved: boolean) => { 
                  this.showSaveMessage(form.title, isFileSaved);
            });
         });
   }

   
   showSaveMessage(title: string, isAllSaved: boolean): void {
      if (isAllSaved) {
         this.snackbarComponent.openSnackBar(`${title} has been saved`, 'success');
      } else {
         this.snackbarComponent.openSnackBar(`${title} has not been saved`, 'fail');
      }
   }
   

   deleteScreenshot (form: Form, hideMessage?: boolean): void {
      this.http.deleteScreenshotData(form.preview)
      .subscribe((isFileDeleted) => {
         if (!hideMessage) {
            this.showDeleteMessage(form.title, !!isFileDeleted);
         }
      });
   }
   

   showDeleteMessage(title: string, isAllSaved: boolean): void {
      if (isAllSaved) {
         this.snackbarComponent.openSnackBar(`${title} has been removed`, 'success');
      } else {
         this.snackbarComponent.openSnackBar(`${title} has not been removed`, 'fail');
      }
   }
}

