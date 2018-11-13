import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatMenuTrigger, MatSnackBar } from '@angular/material';

import { HttpAdminService } from './services/http.service';
import { DialogService } from './services/dialog.service';
import { User } from 'src/app/models/users.model';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-interviewers',
  templateUrl: './interviewers.component.html',
  styleUrls: ['./interviewers.component.scss']
})

export class InterviewersComponent implements OnInit {

    constructor(private http: HttpAdminService,
                private dialog: DialogService,
                public snackBar: MatSnackBar) {}

    usersSource: MatTableDataSource < object > ;
    groupsSource: MatTableDataSource < object > ;
    usersColumnsHeaders: String[];
    groupsColumnsHeaders: String[];
    private usersData: User[];
    private groupsData: Group[];
    private removeTarget: {query: string, isGroup?: boolean };
    private selectedGroup: string;
                
    @ViewChild('usersPaginator') usersPaginator: MatPaginator;
    @ViewChild('groupsPaginator') groupsPaginator: MatPaginator;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    ngOnInit() {
        this.getUsers();
        this.getGroups();

        this.usersColumnsHeaders = this.usersColumns.map(field => field.title);
        this.groupsColumnsHeaders = this.groupsColumns.map(field => field.title);
    }

    private getUsers(): void {
        this.http.getUsers()
            .subscribe(users => {
                this.usersData = users;
                this.renderUsersList();
            });
    }

    private getGroups(): void {
        this.http.getGroups()
            .subscribe(groups => {
                this.groupsData = groups;
                this.renderGroupsList();
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

    private renderGroupsList(): void {
        this.groupsSource = this.initDataSource(this.groupsData, this.groupsPaginator);
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
                        return this.showMessage(`Unsuccessful. ${data.username} already exists.`);
                    }
                    let user = data;
                    user.role ? user.role = 'master' : user.role = 'interviewer';

                    this.usersData.push(data);
                    this.renderUsersList();

                    this.http.addUser(data)
                        .subscribe(_ => {
                            this.showMessage(`${data.username} was added.`);
                        });
                }
            });
    }

    addGroup(): void {
        this.dialog.addGroup()
            .afterClosed()
            .subscribe(data => {
                if (data) {
                    if (this.doExist(data.name, this.groupsData, true)) {
                        this.showMessage(`${data.name} already exists!`);
                    }
                    this.groupsData.push(data);
                    this.renderGroupsList();

                    this.http.addGroup(data)
                        .subscribe(_ => this.renderGroupsList());
                }
            });
    }

    private removeUser(username): void {
        this.usersData = this.usersData.filter(user => user.username != username);
        this.renderUsersList();
        this.snackBar.open(`${username}, was removed`, '', {
            duration: 1500
        });
        this.http.removeUser(username)
            .subscribe(_ =>
                this.showMessage(`${username}, was removed`)
            );
    }

    private removeGroup(query): void {
        this.groupsData = this.groupsData.filter(group => group.name != query);
        this.renderGroupsList();
        this.http.removeGroup(query)
            .subscribe(_ =>
                this.showMessage(`${query}, was removed`)
            );
    }

    openContextMenu(event): void {
        event.preventDefault();
        let triggerButton = document.querySelector('.menuButton');
        triggerButton.setAttribute('style', this.getClickPositionStyle(event));
        this.trigger.openMenu();

        this.removeTarget = this.getClickedItemName(event.target);
    }

    remove(): void {
        if (this.removeTarget) {
            if (!this.removeTarget.isGroup) {
                this.removeUser(this.removeTarget.query)
            } else {
                this.removeGroup(this.removeTarget.query)
            }
        }
        this.removeTarget = null;
    }

    selectGroup(event): void {
        let name = event.target.parentNode.querySelector('.cdk-column-name').innerText ||
            event.target.innerText;

        this.selectedGroup = name;

        this.renderUsersList();
    }

    edit(): void {
        this.showMessage('in proccess');
    }

    private doExist(name: String, array: any, group = false): boolean {
        if (!group) {
            return array.some(user => user.username === name);
        } else {
            return array.some(group => group.name === name);
        }
    }

    usersColumns : Array <{title:string, value: string}> = [{
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

    groupsColumns : Array <{title:string, value: string}>= [{
            title: "name",
            value: "Title"
        },
        {
            title: "description",
            value: "description"
        }
    ];

    showAll(): void {
        this.selectedGroup = '';
        this.renderUsersList();
        this.http.setSelectedGroup(false);
    }

    private getClickedItemName(node): {query: string, isGroup?: boolean } {
        if (node.classList.contains('cdk-column-username')) {
            return {
                query: node.innerText
            }
        } else if (node.classList.contains('cdk-column-name')) {
            return {
                query: node.innerText,
                isGroup: true
            }
        } else if (node.parentNode.querySelector('.cdk-column-name')) {
            return {
                query: node.parentNode.querySelector('.cdk-column-name').innerText,
                isGroup: true
            }
        } else if (node.parentNode.querySelector('.cdk-column-username')) {
            return {
                query: node.parentNode.querySelector('.cdk-column-username').innerText
            }
        } else {
            return {
                query: node.innerText
            }
        }
    }

    private getClickPositionStyle(event): string {
        return `position: fixed;
         left: ${event.pageX + 10}px;
         top: ${event.pageY + 10}px; 
         z-index: 1000`
    }

    private showMessage(message): void {
        this.snackBar.open(message, '', {
            duration: 1500,
        });
    }

    //deprecated: 
    formObject(object): any[] {
        let arr = [],
            regex = /^\_/;

        for (let property in object) {
            if (!property.match(regex)) {
                arr.push({
                    title: property,
                    value: object[property]
                });
            }
        }

        return arr;
    }
}