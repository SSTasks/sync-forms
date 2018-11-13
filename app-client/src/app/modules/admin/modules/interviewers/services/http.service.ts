import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../../../models/users.model';
import { Group } from '../../../../../models/group.model';
import { BehaviorSubject, Observable } from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class HttpAdminService {

    constructor(private http: HttpClient) {
        this.selectedGroup = new BehaviorSubject < any > (false);
    }

    getUsers() {
        return this.http.get < User[] > (`/users/users`);
    };

    getGroups() {
        return this.http.get < Group[] > (`/users/groups`);
    };

    addGroup(group) {
        return this.http.post(`/users/addgroup`, group);
    }

    addUser(user) {
        return this.http.post(`/users/adduser`, user);
    }

    removeUser(username) {
        let request = {
            username
        };
        return this.http.post('/users/removeuser', request);
    }

    removeGroup(name) {
        let request = {
            name
        };
        return this.http.post('/users/removegroup', request);
    }

    public selectedGroup: BehaviorSubject < any > ;

    public getSelectedGroup(): Observable < any > {
        return this.selectedGroup.asObservable();
    }

    public setSelectedGroup(group): void {
        this.selectedGroup.next(group);
    }

}