import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import {Form} from '../services/form';
import {BroadcastService} from '../services/broadcast.service';
import { SocketService } from '../services/socket-service.service';

import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

// import { userInfo } from 'os';

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

    private mouseEventOptions = {
        view: window,
        bubbles: true,
        cancelable: true,
        which: 1,
    };

    private formElements;
    private elementConfigs = [];
    private lastHoveredTarget;

    private unsubClick;
    private unsubMouseMove;
    private unsubFocus;
    private unsubKeyboard;
    private unsubOnChange;
    private unsubConnectionMessage;
    private unsubDisconnectTrigger;

    private currentUser;
    private isSpectator = false;

    private buttonInscription = 'Finish interview';

    private _url = '../assets/form.json';
    private _formData: any = null;

    isHandset$: Observable<boolean> = this.breakpoint.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpoint: BreakpointObserver, 
                private fb: FormBuilder,
                private _http: HttpClient,
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

        if (!this.form) {
            this.router.navigate(['/main']);
            return;
        }

        if (!this.currentUser) {
            this.currentUser = {
                fullname: 'Anonymous Candidate',
                role: 'candidate'
            };
        }

        this.socketService.connectToSockets();

        // decide whether we should create a new interview or connect to
        // an existing one
        if ((this.currentUser.role === 'master' || this.currentUser.role === 'interviewer')
            && !this.socketService.interviewId) {
            const interviewData = {
                interviewer: this.currentUser.fullname,
                interviewId: Math.round(Math.random() * 10000),
                interviewForm: this.form,
                formName: this.form.title,
                creationTime: this.addCreationTime()
            };

            this.socketService.initiateInterview(interviewData);
        } else {
            this.isSpectator = true;
            this.buttonInscription = 'Exit interview';
            this.socketService.joinInterview(this.currentUser);
        }

        window.onbeforeunload = () => this.ngOnDestroy();
    }

    ngAfterViewInit() {
        if (!this.form) {
            this.router.navigate(['/main']);
        } else {
            this.addListeners();
            this.getElementConfigs();
            this.unsubClick = this.clickEventEmitter();
            this.unsubMouseMove = this.mouseMoveEmitter();
            this.unsubFocus = this.focusEmitter();
            this.unsubKeyboard = this.keyboardEventEmitter();
            this.unsubOnChange = this.onChangeEventEmitter();
            this.unsubConnectionMessage = this.showConnectionMessage();
            this.unsubDisconnectTrigger = this.disconnectInterview();
        }
    }

    endInterview() {
        if (this.currentUser.role === 'candidate') {
            this.router.navigate(['/main']);
        } else {
            this.router.navigate(['/preview']);
        }
    }

    private disconnectInterview() {
        return this.socketService.finishInterview()
          .subscribe((triggerFinish: boolean) => {
            setTimeout( () => this.endInterview(), 2000);
          });
    }

    private addCreationTime() {
        const timezoneOffset = (new Date()).getTimezoneOffset() * 60000;
        const dateNow = (new Date(Date.now() - timezoneOffset)).toISOString();

        const day = dateNow.slice(8, 10);
        const month = dateNow.slice(5, 7);
        const time = dateNow.slice(11, 16);

        return `${day}.${month} ${time}`;
    }

    private showConnectionMessage() {
        return this.socketService.showMessage()
          .subscribe((message: string) => {
            this.snackBar.open(message, ' ', {
                duration: 3000
            });
          });
    }

    // primaly written to be able to change slider value
    private getElementConfigs() {
        let form = this.form;
            for (let i = 0; i < form.rows.length; i++) {

                for (let j = 0; j < form.rows[i].cells.length; j++) {
    
                    for (let k = 0; k < form.rows[i].cells[j].elements.length; k++) {
                        let elem = form.rows[i].cells[j].elements[k];
    
                        this.elementConfigs.push(elem.config);
                    }
            }
        }
    }

    private addListeners() {
        this.formElements = document.querySelectorAll('.form-element');
        this.formElements.forEach((element, index) => {
            element.addEventListener('click', this.clickEventInjector(index));
            element.addEventListener('mouseenter', this.mouseMoveEventInjector(index));
            element.addEventListener('mouseleave', this.mouseMoveEventInjector(index));
            element.addEventListener('focus', this.focusEventInjector(index));
            element.addEventListener('keypress', this.keyEventInjector(index));
            element.addEventListener('keyup', this.keyUpEventInjector(index));
            element.addEventListener('change', this.onChangeEventInjector(index));
        });
    }

    private clickEventInjector(index) {
        return this.catchClick.bind(this, index);
    }

    private mouseMoveEventInjector(index) {
        return this.catchMouseMove.bind(this, index);
    }

    private focusEventInjector(index) {
        return this.catchFocus.bind(this, index);
    }

    private keyEventInjector(index) {
        return this.catchTextInput.bind(this, index);
    }

    private keyUpEventInjector(index) {
        return this.catchSpecialKeys.bind(this, index);
    }

    private onChangeEventInjector(index) {
        return this.catchOnChange.bind(this, index);
    }

    //////////// event emitters  ////////////////////

    private clickEventEmitter() {
        return this.socketService.getClickEvent()
          .subscribe((event: any) => {
            const targetElement = this.formElements[event.elementIndex];
            const mouseEvent = new MouseEvent('click', this.mouseEventOptions);

            if (event.sliderValue) {
                if (targetElement && targetElement.tagName === 'MAT-SLIDER') {
                    this.elementConfigs[event.elementIndex].value = event.sliderValue;
                }
                return;
            }
            
            targetElement.querySelector(event.targetElement).dispatchEvent(mouseEvent);    
          });
    }
    
    private mouseMoveEmitter() {
        return this.socketService.getMouseMove()
          .subscribe((event: any) => {

            if (event.eventType === 'mouseenter') {
                if (this.lastHoveredTarget === event.targetElement) {
                    return;
                }

                this.lastHoveredTarget = event.targetElement;
                this.formElements[event.targetElement].classList.add('hovered');

            } else {
                this.lastHoveredTarget = -1;
                this.formElements[event.targetElement].classList.remove('hovered');
            }
          });
    }

    private focusEmitter() {
        return this.socketService.getFocusEvent()
          .subscribe((event: any) => {
            const elementToFocus = this.formElements[event.elementIndex].querySelector(event.targetElement);
        
            if (elementToFocus) {
                elementToFocus.focus();
            } else {
                this.formElements[event.elementIndex].focus();
            }
          });
    }

    private keyboardEventEmitter() {
        return this.socketService.getKeyboardEvent()
          .subscribe((event: any) => {
            const targetElement = this.formElements[event.targetElementIndex];
            const changeEvent = new Event('change');

            targetElement.querySelector(event.elementType).value = event.newValue;
            targetElement.querySelector(event.elementType).dispatchEvent(changeEvent);
          });
    }

    private onChangeEventEmitter() {
        return this.socketService.getOnChangeEvent()
          .subscribe((event: any) => {
              const targetElement = this.formElements[event.targetElementIndex];

              // angular material places target elements differently
              if (event.targetElement === 'select') {
                targetElement.value = event.newValue;
              } else {
                targetElement.querySelector(event.targetElement).value = event.newValue;
              }
          });
    }

    //////////// event catchers  ////////////////////
    
    private catchClick(elementIndex, event) {
        let shouldBeSent = true;

        const eventInfo = {
            elementIndex: elementIndex,
            targetElement: event.target.tagName.toLowerCase(),
            sliderValue: null
        };

        // if event initiated programatically don't react to it
        if (!event.isTrusted) {
          shouldBeSent = false;
        }

        if (event.target.tagName === 'SELECT') {
            shouldBeSent = false;
        }

        if (event.target.tagName === 'MAT-SLIDER') {
            eventInfo.sliderValue = event.target.getAttribute('aria-valuenow');
        }
    
        if (shouldBeSent) {
          this.socketService.sendClick(eventInfo);
        }
    }
    
    private catchMouseMove(elementIndex, event) {
        const eventInfo = {
            targetElement: elementIndex,
            eventType: event.type
        };

        this.socketService.sendMouseMovement(eventInfo);
    }

    private catchFocus(elementIndex, event) {
        const eventInfo = {
            elementIndex,
            targetElement: event.target.tagName.toLowerCase()
        };
        
        this.socketService.sendFocusEvent(eventInfo);
    }
    
    private catchTextInput(elementIndex, event) {
        const newValue = event.target.value + event.key;
        // prevents typing 'Enter' into the input
        // catchOnChange already cares about datepickers
        if (event.key === 'Enter' || event.target.type === 'date') {
            return;
        }

        if (event.target.type === 'number'
              && (isNaN(newValue) || event.key === '.' || event.key === ' ')) {
            return;
        }

        this.keyboardEventHandler(event, newValue, elementIndex);
    }
    
    private catchSpecialKeys(elementIndex, event) {
        console.log(event);
        if (!event.key) {
            return;
        } else if (event.key === 'Backspace'
            || event.key === 'Delete'
            || event.ctrlKey
            || event.key.slice(0, 5) === 'Arrow') {

            const newValue = event.target.value;
            this.keyboardEventHandler(event, newValue, elementIndex);

        // process focus caused by 'Tab' key
        } else if (event.key === 'Tab') {
            this.catchFocus(elementIndex, event);
        }
    }
    
    private keyboardEventHandler(event, newValue, elementIndex) {
        const switchEventInfo = {
            elementIndex,
            targetElement: event.target.tagName.toLowerCase()
        };

        // if these elements were interacted by keyboard
        if (event.key.slice(0, 5) === 'Arrow' && event.target.type === 'radio') {

            this.socketService.sendClick(switchEventInfo);       
            return;
        }

        if ((event.target.type === 'checkbox' || event.target.type === 'radio')
            && event.key === ' ') {

            this.socketService.sendClick(switchEventInfo);
            return;
        }

        if (event.target.tagName === 'MAT-SLIDER'
              || event.target.tagName === 'SELECT') {
            return;
        }

        const eventInfo = {
            targetElementIndex: elementIndex,
            newValue,
            elementType: event.target.tagName.toLowerCase()
        };
        
        this.socketService.sendKeysEvent(eventInfo);
    }
    
    private catchOnChange(elementIndex, event) {
        const eventInfo = {
            targetElementIndex: elementIndex,
            targetElement: event.target.tagName.toLowerCase(),
            newValue: event.target.value
        };

        this.socketService.sendOnChangetEvent(eventInfo);
    }

    ngOnDestroy() {
        if (!this.currentUser) {
            return;
        } else if (this.currentUser.role === 'candidate' || this.isSpectator) {
            this.socketService.emitConnectionMessage(this.currentUser, 'disconnect');
            this.socketService.setInterviewId(null);
        } else {
            this.socketService.endInterview(this.currentUser);
        }

        if (this.unsubClick) {
            this.unsubClick.unsubscribe();
            this.unsubMouseMove.unsubscribe();
            this.unsubFocus.unsubscribe();
            this.unsubKeyboard.unsubscribe();
            this.unsubOnChange.unsubscribe();
            this.unsubConnectionMessage.unsubscribe();
            this.unsubDisconnectTrigger.unsubscribe();
        }
    }
}
