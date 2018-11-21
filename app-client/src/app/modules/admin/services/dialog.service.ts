import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GroupDialogComponent } from '../components/dialog/group.dialog';
import { UsersDialogComponent } from '../components/dialog/users.dialog';

import { HttpAdminService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

    constructor(public dialog: MatDialog, public http: HttpAdminService) {}

    target: any;

    addGroup(): MatDialogRef < GroupDialogComponent > {
        return this.dialog.open(GroupDialogComponent);
    }

    addUser(): MatDialogRef < UsersDialogComponent > {
        return this.dialog.open(UsersDialogComponent);
    }

    deleteGroup(): MatDialogRef < GroupDialogComponent > {
        return this.dialog.open(GroupDialogComponent, {
            data: this.formArray(this.target)
        });
    }

    deleteUser(): MatDialogRef < UsersDialogComponent > {
        return this.dialog.open(UsersDialogComponent, {
            data: this.formArray(this.target)
        });
    }

    editGroup(): MatDialogRef < GroupDialogComponent > {
        return this.dialog.open(GroupDialogComponent, {
            data: {
                object: this.formArray(this.target),
                edit: true
            }
        });
    }

    editUser(): MatDialogRef < UsersDialogComponent > {
        return this.dialog.open(UsersDialogComponent, {
            data: {
                object: this.formArray(this.target),
                edit: true
            }
        });
    }

    openContextMenu(event, trigger): void {
        event.event.preventDefault();
        let triggerButton = document.querySelector('.menuButton');
        triggerButton.setAttribute('style', this.getClickPositionStyle(event.event));

        this.target = event.item;

        if (!this.target._id) {
            this.target = this.target.username ? this.getUser(this.target.username, trigger) :
                                                 this.getGroup(this.target.name, trigger);
        } else {
            trigger.openMenu(event);
        }
    }

    getUser(username, trigger) {
        this.http.getUser(username)
            .subscribe(user => {
                this.target = user;
                trigger.openMenu(event);
            });
    }

    getGroup(name, trigger) {
        this.http.getGroup(name)
            .subscribe(group => {
                this.target = group;
                trigger.openMenu(event);
            });
    }

    formArray(object) {
        let arr = [],
            regex = /^\_/;

        for (let property in object) {
            if (!property.match(regex)) {
                if (property.match('password')) {
                    arr.push({
                        title: property,
                        value: ''
                    })
                } else {
                    arr.push({
                        title: property,
                        value: object[property]
                    });
                }
            }
        }
        return arr;
    }

    public messages = {
        addGroup: 'Add new group',
        delGroup: 'Delete group'
    }


    public getClickPositionStyle(event): string {
        return `position: fixed;
                left: ${event.pageX + 10}px;
                top: ${event.pageY + 10}px; 
                z-index: 1000`;
    }
}