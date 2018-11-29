import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Form} from '../services/form';
import {BroadcastService} from '../services/broadcast.service';
import { SocketService } from '../services/socket-service.service';

import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';


@Component({
    selector: 'app-interview-page',
    templateUrl: './interview-page.component.html',
    styleUrls: ['./interview-page.component.scss']
})
export class InterviewPageComponent implements OnInit, AfterViewInit, OnDestroy {
    public configPanel: boolean;
    public options: FormGroup;
    public form: Form; // new form
    private elemParams: any; // row and cell of new element

    private unsubConnectionMessage;
    private unsubDisconnectTrigger;

    private currentUser;
    private isInitiator = true;
    private interviewFinished = false;

    private buttonInscription = 'Finish interview';
    private elementCount = 1;

    private _url = '../assets/form.json';
    private _formData: any = null;

    isHandset$: Observable<boolean> = this.breakpoint.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpoint: BreakpointObserver, 
                private fb: FormBuilder,
                private router: Router,
                private broadcast: BroadcastService,
                private socketService: SocketService,
                private snackBar: MatSnackBar) {

        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }

    ngOnInit() {
        this.form = this.broadcast.selectedForm;
        this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));

        if (!this.form || !this.currentUser) {
            this.router.navigate(['/main']);
            return;
        }

        this.socketService.connectToSockets();

        // decide whether we should create a new interview or connect to
        // an existing one
        if ((this.currentUser.role === 'master' || this.currentUser.role === 'interviewer')
          && !this.socketService.interviewId) {
            const interviewData = {
                interviewer: this.currentUser.fullname,
                role: this.currentUser.role,
                interviewId: Math.round(Math.random() * 100000),
                interviewForm: this.form,
                formName: this.form.title
            };

            this.socketService.initiateInterview(interviewData);
        } else {
            this.isInitiator = false;
            this.buttonInscription = 'Exit interview';
            this.socketService.joinInterview(this.currentUser);
        }

        window.onbeforeunload = () => this.ngOnDestroy();
    }

    ngAfterViewInit() {
        if (!this.form) {
            this.router.navigate(['/main']);
        } else {
            this.unsubConnectionMessage = this.showConnectionMessage();
            this.unsubDisconnectTrigger = this.disconnectInterview();
        }
    }

    // if initiated by user
    leaveInterview() {
        if (this.currentUser.role === 'candidate') {
            this.router.navigate(['/main']);
        } else {
            this.router.navigate(['/preview']);
        }
    }

    // if initiated by interviewer's disconnect
    private disconnectInterview() {
        return this.socketService.finishNotificator()
          .subscribe((triggerFinish: boolean) => {
            this.interviewFinished = true;
            setTimeout( () => this.leaveInterview(), 2000);
          });
    }

    private showConnectionMessage() {
        return this.socketService.showMessage()
          .subscribe((message: string) => {
            this.snackBar.open(message, ' ', {
                duration: 3000
            });
          });
    }
    
    // make an array with certain amount of fake 'elements'
    // and add them to the form template
    // so that 'for' loop can take them into account
    // and add event listeners to the extra elements
    // without rendering fake ones
    private addExtraElements(amount) {
        const fakeElements = Array.from('e'.repeat(amount));

        const extraElements = [{elements: fakeElements}];
        this.form.rows.push({cells: extraElements});
    }

    private setElementNumber() {
        return this.elementCount++;
    }

    ngOnDestroy() {
        if (!this.currentUser) {
            return;
        } else if (this.interviewFinished) {
            this.socketService.detachInterviewData();
        } else if (this.currentUser.role === 'candidate' || !this.isInitiator) {
            this.socketService.exitInterview(this.currentUser);
        } else {
            this.socketService.endInterview(this.currentUser);
        }

        this.broadcast.selectForm('');

        if (this.unsubConnectionMessage) {
            this.unsubConnectionMessage.unsubscribe();
            this.unsubDisconnectTrigger.unsubscribe();
        }
    }
}
