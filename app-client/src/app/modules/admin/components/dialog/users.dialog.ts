import { Component, OnInit, Inject } from '@angular/core';
import { HttpAdminService } from '../../services/http.service';
import { Group } from 'src/app/models/group.model';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'users-dialog',
  templateUrl: './users.dialog.html',
  styleUrls: ['./users.dialog.scss']
})

export class UsersDialogComponent implements OnInit {

    title = 'Add new interviewer';

    constructor(private http: HttpAdminService,
                @Inject(MAT_DIALOG_DATA) public data: any) {}

    inputFields: Object = [{
            title: 'fullname',
            value: 'Name'
        },
        {
            title: 'username',
            value: 'Username'
        },
        {
            title: 'password',
            value: 'Password',
            type: 'password'
        }
        // {
        //   title: 'confirm',
        //   value: 'Confirm Password',
        //   type: 'password'
        // }
    ];

    getErrorMessage(field) {
        return field.hasError('required') ? 'You must enter a value' :
            field.hasError('email') ? 'Not a valid email' : '';
    }

    checked = false;

    groups: Group[];

    ngOnInit() {
        this.http.getGroups().
        subscribe(groups => this.groups = groups);
    }
}
