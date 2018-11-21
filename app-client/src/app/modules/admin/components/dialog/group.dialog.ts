import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Validators } from "@angular/forms";
import { FieldConfig } from "../dynamicform/form-controls/field.interface";
import { DynamicFormComponent } from "../dynamicform/dynamic-form-container/dynamic-form-container.component";

@Component({
  selector: 'group-dialog',
  templateUrl: './group.dialog.html',
  styleUrls: ['./group.dialog.scss']
})

export class GroupDialogComponent implements AfterViewInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    //remove setTimeout before production
    ngAfterViewInit(){
        if(this.form){
            setTimeout(() => {
                if(this.data && !this.data.edit){
                    this.data.forEach(field => {
                         this.form.setValue(field.title, field.value);
                        this.form.setDisabled(field.title, true);
                    });
                } else if (this.data && this.data.edit){
                    this.data.object.forEach(field => {
                        this.form.setValue(field.title, field.value);
                    });
                }
            });
        }
    }

    groupConfig: FieldConfig[] = [{
            type: "input",
            label: "Title",
            inputType: "text",
            name: "name",
            validations: [{
                    name: "required",
                    validator: Validators.required,
                    message: "Title required"
                },
                {
                    name: "minlength",
                    validator: Validators.minLength(3),
                    message: "Minimum length is 3 symbols"
                },
                {
                    name: "maxlength",
                    validator: Validators.maxLength(15),
                    message: "Maximum length is 15 symbols"
                }
            ]
        },
        {
            type: "input",
            label: "Description",
            inputType: "description",
            name: "description",
            validations: [{
                    name: "required",
                    validator: Validators.required,
                    message: "Description Required"
                },
                {
                    name: "minlength",
                    validator: Validators.minLength(3),
                    message: "Minimum length is 3 symbols"
                },
                {
                    name: "maxlength",
                    validator: Validators.maxLength(15),
                    message: "Maximum length is 15 symbols"
                }
            ]
        }
    ];

    messages = {
        new: 'Create new group',
        edit: 'Edit grop',
        del: 'Delete group',
    }

    getTitle(){
        return !this.data ? this.messages.new : this.data.edit ? this.messages.edit : this.messages.del;
    }
}

// 19.11.2018 olez: instead of using ngAfterViewInit, add properties with getValue() and isDisabled()
// you can use this code for adding field value and disabling it in case of removing object
//
// getValue(fieldTitle: string){
//     (this.data && !this.data.edit) ? 
//         this.data.filter( field => field.title === fieldTitle)[0].value : 
//     (this.data && this.data.edit) ?
//         this.data.object.filter( field => field.title === fieldTitle)[0].value :
//         null;
// }

// isDisabled(){
//     return this.data && !this.data.edit;
// }
