
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Form} from '../services/form';
import {BroadcastService} from '../services/broadcast.service';
import { HttpService } from '../services/http.service';
import { HttpAdminService } from '../../modules/admin/services/http.service';
import { MatDialog } from '@angular/material';
import { ConfirmRemovingFormComponent } from '../../options/confirm-removing-form/confirm-removing-form.component';
import { ScreenshotService } from '../services/screenshot.service';

const emptyForm = {
    title: 'New form',
    author: 'Ya',
    preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
    groups: ['Dnipro-142'],
    rows: [],
    description: ''
};

@Component({
    selector: 'app-constructor-page',
    templateUrl: './constructor-page.component.html',
    styleUrls: ['./constructor-page.component.scss']
})
export class ConstructorPageComponent implements OnInit {
    public configPanel: boolean;
    public options: FormGroup;
    public formInfo: FormGroup; // info about current form (title, groups)
    public groups: String[];
    public form: Form; // new form
    private elemParams: any; // row and cell of new element
    private disableSaveFormButton: boolean;
   
   isHandset$: Observable<boolean> = this.breakpoint.observe(Breakpoints.Handset)
   .pipe(
      map(result => result.matches)
    );

    constructor(private breakpoint: BreakpointObserver,
                private fb: FormBuilder,
                private broadcast: BroadcastService,
                private http: HttpService,
                private router: Router,
                private httpAdmin: HttpAdminService,
                private dialog: MatDialog,
                private screenshotService: ScreenshotService,
                ) {
        // get template of element from constructor
        this.broadcast.subscriberSendElem()
            .subscribe(
                elem => {
                    console.log('got element');
                    this.pushElem(elem);
                });

        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }


    ngOnInit() {
        let defaultForm = JSON.parse(JSON.stringify(emptyForm)), // getting template of empty form
            selectedForm = this.broadcast.selectedForm; // getting selected form

        // adding default template for creating new form
        this.form = selectedForm ? selectedForm : defaultForm;
        this.configPanel = false;

        // form builder for name and group current form
        this.httpAdmin.getGroups()
            .subscribe( groups => this.groups = groups.map( group => group.name ));

        this.formBuild();
    }

 
    // form builder for name and group current form
    formBuild() {
        this.formInfo = this.fb.group({
            title: [this.form.title, [
                Validators.required,
                Validators.minLength(3)
            ]],
            groups: [this.form.groups, [
                Validators.required
            ]]
        });
    }

    showEditPanel() {
        this.router.navigate(['/preview']);
    }


    saveForm() {
      this.disableSaveFormButton = true;

      if (this.form.preview !== '') {
          let hideMessage = true;
          this.screenshotService.deleteScreenshot(this.form, hideMessage);
      }
      
      let currentDate = Date.now();
      let imgName = currentDate + '.png';

      this.form.title = this.formInfo.value.title;
      this.form.author = JSON.parse(window.localStorage.getItem('currentUser')).username;
      this.form.groups = this.formInfo.value.groups;
         this.form.preview = imgName;

      this.http.saveForm(this.form)
         .subscribe(data => {
            const isFormSaved = Array.isArray(data);

            if (isFormSaved) {
               if (this.form._id) {
                  let forms = data.filter(form => form._id === this.form._id);
                  this.form = forms[0]; // show updated form
               } else {
                  this.form = data[data.length - 1]; // show created form
               }
                  this.screenshotService.saveScreenshot(this.form);
            } else {
               this.screenshotService.showSaveMessage(this.form.title, isFormSaved);
            }
            this.disableSaveFormButton = false;
            });
    }

  
    delForm(form) {
      let confirmRemovingRef = this.dialog.open(ConfirmRemovingFormComponent);
      confirmRemovingRef.afterClosed().subscribe(result => {
         if (result) {
            this.http.delForm(form._id)
               .subscribe(data => {
                  const isFormDeleted = Array.isArray(data);

                  if (isFormDeleted) {
                     this.showEditPanel();
                     this.screenshotService.deleteScreenshot(form);

                  } else {
                     this.screenshotService.showDeleteMessage(this.form.title, isFormDeleted);
                  }
               });
            }
        });
    }

    
    addRow() {
        this.hideConfig();
        this.form.rows.push({cells: []});
    }

    delRow(rowIndex) {
        this.hideConfig();
        this.form.rows.splice(rowIndex, 1);
    }

    addCell(rowIndex) {
        this.hideConfig();
        this.form.rows[rowIndex].cells.push({elements: []});
    }

    delCell(rowIndex, cellIndex) {
        this.hideConfig();
        this.form.rows[rowIndex].cells.splice(cellIndex, 1);
    }

    addElem(rowIndex, cellIndex) {
        this.hideConfig();
        this.elemParams = {row: rowIndex, cell: cellIndex}; // saves row and cell for new element
        console.log(this.elemParams);
        setTimeout( () => {
            this.broadcast.activationConstructor();
        }, 100);
    }

    pushElem(elem) {
        // debugger;
        console.log(123)
        if (this.elemParams) {
            console.log(456)
            let copyElem = JSON.parse(JSON.stringify(elem));
            let elements = this.form.rows[this.elemParams.row].cells[this.elemParams.cell].elements;
            this.hideConfig();

            if (!elements.length) {
                elements.push(copyElem);
            }
        }
    }

    delElem(rowIndex, cellIndex) {
        this.hideConfig();
        this.form.rows[rowIndex].cells[cellIndex].elements.splice(0, 1);
    }

    addConfig(elem, rowIndex, cellIndex) {
        this.elemParams = {row: rowIndex, cell: cellIndex}; // saves row and cell for new config of element
        this.configPanel = true;
        setTimeout( () => {
            this.broadcast.activationConfig(elem.config);
        }, 100);
    }

    hideConfig() {
        this.configPanel = false;
    }
}




