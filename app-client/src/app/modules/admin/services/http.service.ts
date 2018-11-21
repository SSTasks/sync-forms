import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../models/users.model';
import { Group } from '../../../models/group.model';
import { BehaviorSubject, Observable } from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class HttpAdminService {

    constructor(private http: HttpClient) {
        this.selectedGroup = new BehaviorSubject < any > (false);
    }

    getUsers() {
        return this.http.get < User[] > (`/adm/users`);
    }

    getUser(name: string) {
        return this.http.get < User > (`/adm/user/${name}`);
    }

    getGroups() {
        return this.http.get < Group[] > (`/adm/groups`);
    }

    getGroup(name: string) {
        return this.http.get < Group > (`/adm/group/${name}`);
    }

    addGroup(group) {
        return this.http.post(`/adm/groups`, group);
    }

    addUser(user) {
        return this.http.post(`/adm/users`, user);
    }

    deleteUser(id: string) {
        return this.http.delete(`/adm/user/${id}`);
    }

    deleteGroup(id: string) {
        return this.http.delete(`/adm/group/${id}`);
    }

    updateUser(user){
        return this.http.put('/adm/user/', user);
    }

    updateGroup(group){
        return this.http.put('/adm/group/', group);
    }

    public selectedGroup: BehaviorSubject < any > ;

    public getSelectedGroup(): Observable < any > {
        return this.selectedGroup.asObservable();
    }

    public setSelectedGroup(group): void {
        this.selectedGroup.next(group);
    }

}