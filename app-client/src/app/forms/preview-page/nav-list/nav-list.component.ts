import {Component, OnInit} from '@angular/core';

import {HttpService} from '../../services/http.service';
import {Form} from '../../services/form';
import {BroadcastService} from '../../services/broadcast.service';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
    public forms: Form[];

    constructor(private http: HttpService, private broadcast: BroadcastService) {
        this.broadcast.subscriberCurrentForms()
            .subscribe(
                forms => {
                    this.forms = forms;
                });
    }

    ngOnInit() {
        this.http.getAllForms()
            .subscribe(forms => {
                this.forms = forms;
            });
    }

    showForm(item) {
        this.broadcast.selectForm(item);
    }

}
