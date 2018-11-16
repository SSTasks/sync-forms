import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatMenuTrigger, MatSnackBar } from '@angular/material';

import { HttpAdminService } from '../../services/http.service';
import { DialogService } from '../../services/dialog.service';
import { SnackbarService } from '../../services/snackbar.service';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-interviewers',
  templateUrl: './interviewers.component.html',
  styleUrls: ['./interviewers.component.scss']
})

export class InterviewersComponent implements OnInit {

    constructor(private http: HttpAdminService,
                private dialog: DialogService,
                private message: SnackbarService) {}

    usersSource: MatTableDataSource < object > ;
    usersColumnsHeaders: String[];
    private usersData: User[];
    private selectedGroup: string;

    @ViewChild('usersPaginator') usersPaginator: MatPaginator;
    @ViewChild('groupsPaginator') groupsPaginator: MatPaginator;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    ngOnInit() {
        this.getUsers();

        this.usersColumnsHeaders = this.usersColumns.map(field => field.title);
    }

    private getUsers(): void {
        this.http.getUsers()
            .subscribe(users => {
                this.usersData = users;
                this.renderUsersList();
            });
    }

    private renderUsersList(): void {
        if (!this.selectedGroup) {
            this.usersSource = this.initDataSource(this.usersData, this.usersPaginator);
        } else {
            let selectedUsers = this.usersData.filter(user => user.group === this.selectedGroup);
            this.usersSource = this.initDataSource(selectedUsers, this.usersPaginator);
            this.http.setSelectedGroup(this.selectedGroup);
        }
    }

    private initDataSource(data, paginator): MatTableDataSource < object > {
        let dataSource = new MatTableDataSource(data);
        dataSource.paginator = paginator;

        return dataSource;
    }

    addUser(): void {
        this.dialog.addUser()
            .afterClosed()
            .subscribe(data => {
                if (data) {
                    if (this.doExist(data.username, this.usersData)) {
                        return this.message.show(`Unsuccessful. ${data.username} already exists.`);
                    }
                    let user = data;
                    user.role ? user.role = 'master' : user.role = 'interviewer';

                    this.usersData.push(data);
                    this.renderUsersList();

                    this.http.addUser(data)
                        .subscribe(_ => {
                            this.message.show(`${data.username} was added.`);
                        });
                }
            });
    }

    openContextMenu(event): void {
        this.dialog.openContextMenu(event, this.trigger);
    }

    remove(): void {
        if (this.dialog.target) {
            this.dialog.deleteUser()
            .afterClosed()
            .subscribe( response => { if(response.shouldDelete){
                this.removeUser(this.dialog.target);
                this.dialog.target = null;
            }});
        }
    }

    private removeUser(targetUser: User): void {
        console.log('targetUser:', targetUser);
        this.usersData = this.usersData.filter(user => user._id != targetUser._id);
        this.renderUsersList();
        this.message.show(`${targetUser.username}, was removed`);

        this.http.deleteUser(targetUser._id)
            .subscribe(_ =>
                this.message.show(`${targetUser.username}, was removed`));
    }

    selectGroup(event): void {
        this.selectedGroup = name;
        this.renderUsersList();
    }

    edit(): void {
        this.message.show('in proccess');
    }

    private doExist(name: String, array: any): boolean {
        return array.some(user => user.username === name);
    }

    showAll(): void {
        this.selectedGroup = '';
        this.renderUsersList();
        this.http.setSelectedGroup(false);
    }

    usersColumns: Array < {
        title: string,
        value: string
    } > = [{
            title: "username",
            value: "Username"
        }, {
            title: "fullname",
            value: "Name"
        },
        {
            title: "group",
            value: "Group"
        },
        {
            title: "role",
            value: "Role"
        }
    ];
}