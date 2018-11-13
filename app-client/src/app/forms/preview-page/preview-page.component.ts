import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Form} from '../services/form';
import {BroadcastService} from '../services/broadcast.service';

import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';

@Component({
    selector: 'app-preview-page',
    templateUrl: './preview-page.component.html',
    styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {
    public options: FormGroup;
    public form: Form; // new form

    isHandset$: Observable<boolean> = this.breakpoint.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpoint: BreakpointObserver,
                private fb: FormBuilder,
                private http: HttpService,
                private broadcast: BroadcastService,
                private router: Router) {

        this.broadcast.subscriberSelectForm()
            .subscribe(
                form => {
                    this.form = form;
                });

        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }

    ngOnInit() {
        this.broadcast.selectedForm = null;
    }

    startInterview() {
        this.router.navigate(['/interview-page']);
    }

    showEditPanel() {
        this.router.navigate(['/constructor']);
    }

    delForm(id) {
        this.http.delForm(id)
            .subscribe(data => {
                if (Array.isArray(data)) {
                    this.broadcast.selectedForm = null;
                    this.form = null;
                }
            });
    }
}



