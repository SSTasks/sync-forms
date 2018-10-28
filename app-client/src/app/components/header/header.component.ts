import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from 'src/app/services/http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // isMaster: boolean = true;
    // isCandidate: boolean = true;

    user: object;

    @Input() Title: string;

    constructor(private httpService: HttpService, private router: Router) {
        this.httpService.subscriber()
            .subscribe(user => this.user = user);
    }

    onLogout() {
        this.httpService.logout();
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.user = JSON.parse(window.localStorage.getItem('currentUser'));
    }

}
