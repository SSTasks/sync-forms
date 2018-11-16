import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Form} from '../services/form';
import {BroadcastService} from '../services/broadcast.service';

import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';
import { MatDialog } from '@angular/material';
import { ConfirmRemovingFormComponent } from '../../options/confirm-removing-form/confirm-removing-form.component';
import { ScreenshotService } from '../services/screenshot.service';


@Component({
    selector: 'app-preview-page',
    templateUrl: './preview-page.component.html',
    styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {
    public options: FormGroup;
    public form: Form; // new form

    isHandset$: Observable<boolean> = this.breakpoint.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpoint: BreakpointObserver,
                private fb: FormBuilder,
                private http: HttpService,
                private broadcast: BroadcastService,
                private router: Router,
                private dialog: MatDialog,
                private screenshotService: ScreenshotService) {

        this.broadcast.subscriberSelectForm()
            .subscribe(
                form => {
                    this.form = form;
                });

        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }

    ngOnInit() {
        this.broadcast.selectedForm = null;
    }

    startInterview() {
        this.router.navigate(['/interview-page']);
    }

    showEditPanel() {
        this.router.navigate(['/constructor']);
    }
    
    delForm(form) {
      let confirmRemovingRef = this.dialog.open(ConfirmRemovingFormComponent);
      confirmRemovingRef.afterClosed().subscribe(result => {
         if (result) {
            this.http.delForm(form._id)
               .subscribe(data => {
                  const isFormDeleted = Array.isArray(data);

                  if (isFormDeleted) {
                     this.broadcast.selectedForm = null;
                     this.form = null;
                     this.screenshotService.deleteScreenshot(form);

                  } else {
                     this.screenshotService.showDeleteMessage(this.form.title, isFormDeleted);
                  }
               });
            }
         });
   }
}