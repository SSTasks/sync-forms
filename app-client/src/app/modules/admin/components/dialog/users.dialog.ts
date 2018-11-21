import { Component, OnInit, Inject, ViewChild, AfterViewInit, Input } from '@angular/core';
import { HttpAdminService } from '../../services/http.service';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Validators } from "@angular/forms";
import { FieldConfig } from "../dynamicform/form-controls/field.interface";
import { DynamicFormComponent } from "../dynamicform/dynamic-form-container/dynamic-form-container.component";

@Component({
  selector: 'users-dialog',
  templateUrl: './users.dialog.html',
  styleUrls: ['./users.dialog.scss']
})

export class UsersDialogComponent implements OnInit, AfterViewInit {

    constructor(private http: HttpAdminService,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    checked = false;

    ngOnInit() {}

    //remove setTimeout before production
    ngAfterViewInit() {
        if (this.form) {
            setTimeout(() => {
                this.http.getGroups().subscribe(
                    groups => {
                        this.form.fields.filter(field => {
                            if(field.name === 'group'){
                            let loadedGroups = groups.map( group => group.name);
                            field.options = loadedGroups;
                        }});
                    }
                )
                
                if (this.data && !this.data.edit) {

                    this.data.forEach(field => {
                        this.form.setValue(field.title, field.value);
                        this.form.setDisabled(field.title, true);
                    });
                } else if (this.data && this.data.edit) {
                    this.data.object.forEach(field => {
                        this.form.setValue(field.title, field.value);
                    });
                }
            });
        }

    }

    messages = {
        new: 'Create new user',
        edit: 'Edit user',
        del: 'Delete user',
    }

    getTitle() {
        return !this.data ? this.messages.new : this.data.edit ? this.messages.edit : this.messages.del;
    }

    userConfig: FieldConfig[] = [{
            type: "input",
            label: "Name",
            inputType: "text",
            name: "fullname",
            validations: [{
                    name: "required",
                    validator: Validators.required,
                    message: "Name required"
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
            label: "Username",
            inputType: "text",
            name: "username",
            validations: [{
                    name: "required",
                    validator: Validators.required,
                    message: "Username required"
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
            label: "Password",
            inputType: "password",
            name: "password",
            validations: [{
                    name: "required",
                    validator: this.isPassRequired(),
                    message: "Password required"
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
            type: "select",
            label: "User group",
            name: "group",
            options: [],
            validations: [{
                    name: "required",
                    validator: Validators.required,
                    message: "Password required"
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
            type: "toggle",
            label: "Master",
            name: "role",
            value: this.checked,
            validations: []
        }
    ];

    isPassRequired(){
        return (this.data && this.data.edit) ? Validators.nullValidator : Validators.required;
    }
}
