import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new EventEmitter();

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<any>('/users/auth', { username: username, password: password })
            .pipe(map(user => {
                this.user.emit(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        window.localStorage.clear();
        this.user.emit({});
        return this.http.get<any>('/users/logout')
    }

    loginCandidate(username: object) {
        localStorage.setItem('currentUser', JSON.stringify(username));
        this.user.emit(username);
    }

    subscriber() {
        return this.user;
    }

}

