import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket-service.service';
import { StatisticService } from '../services/statistic.service';

@Component({
    selector: 'app-element',
    templateUrl: './element.component.html',
    styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() elem: any;
    @Input() elementNumber: number;
    @Input() interviewFinished: boolean;
    @Output() signalExtraElements = new EventEmitter<number>();

    private formElement;

    private sliderValue = 0;

    private unsubClick;
    private unsubMouseMove;
    private unsubFocus;
    private unsubKeyboard;
    private unsubOnChange; 

    private mouseEventOptions = {
        view: window,
        bubbles: true,
        cancelable: true,
        which: 1,
    };

    constructor(
        private socketService: SocketService,
        private statistic: StatisticService,
        private router: Router) {
    }

    ngOnInit() {
        if (typeof(this.elem) !== 'string' && this.elem.type !== 'select') {
            if (this.elem.type === 'slider') {
                this.sliderValue = this.elem.config.value;
            }

            if (this.elementNumber && this.elem.config.options) {
                this.signalExtraElements.emit(this.elem.config.options.length - 1);
            }
        }
    }

    ngAfterViewInit() {
        if (this.router.url !== '/interview-page') {
            return;
        }

        this.addListeners();
        this.unsubClick = this.clickEventEmitter();
        this.unsubMouseMove = this.mouseMoveEmitter();
        this.unsubFocus = this.focusEmitter();
        this.unsubKeyboard = this.keyboardEventEmitter();
        this.unsubOnChange = this.onChangeEventEmitter();
    }

    private addListeners() {
        this.formElement = document.querySelector('.form-element');
        
        if (this.formElement) {
            this.formElement.classList.remove('form-element');

            this.formElement.addEventListener('click', this.catchClick.bind(this));
            this.formElement.addEventListener('mouseenter', this.catchMouseMove.bind(this));
            this.formElement.addEventListener('mouseleave', this.catchMouseMove.bind(this));
            this.formElement.addEventListener('focus', this.catchFocus.bind(this));
            this.formElement.addEventListener('keypress', this.catchTextInput.bind(this));
            this.formElement.addEventListener('keyup', this.catchSpecialKeys.bind(this));
            this.formElement.addEventListener('change', this.catchOnChange.bind(this));
        }
    }

    //////////// event emitters  ////////////////////

    private clickEventEmitter() {
        return this.socketService.getClickEvent()
          .subscribe((event: any) => {
            if (event.elementNumber !== this.elementNumber) {
                return;
            }

            const targetElement = this.formElement.querySelector(event.targetElement);
            const mouseEvent = new MouseEvent('click', this.mouseEventOptions);

            if (targetElement) {
                targetElement.dispatchEvent(mouseEvent);
            }
            
          });
    }
    
    private mouseMoveEmitter() {
        return this.socketService.getMouseMove()
          .subscribe((event: any) => {
            if (event.elementNumber !== this.elementNumber) {
                return;
            }

            if (event.eventType === 'mouseenter') {
                this.formElement.classList.add('hovered');

            } else {
                this.formElement.classList.remove('hovered');
            }
          });
    }

    private focusEmitter() {
        return this.socketService.getFocusEvent()
          .subscribe((event: any) => {
            if (event.elementNumber !== this.elementNumber) {
                return;
            }

            const elementToFocus = this.formElement.querySelector(event.targetElement);
        
            if (elementToFocus) {
                elementToFocus.focus();
            } else {
                this.formElement.focus();
            }
          });
    }

    private keyboardEventEmitter() {
        return this.socketService.getKeyboardEvent()
          .subscribe((event: any) => {
            if (event.elementNumber !== this.elementNumber) {
                return;
            }

            const changeEvent = new Event('change');

            this.formElement.querySelector(event.elementType).value = event.newValue;
            this.formElement.querySelector(event.elementType).dispatchEvent(changeEvent);
          });
    }

    private onChangeEventEmitter() {
        return this.socketService.getOnChangeEvent()
            .subscribe((event: any) => {
                if (event.elementNumber !== this.elementNumber) {
                    return;
                }

                if (!event.targetElement) {
                    this.sliderValue = event.newValue;
                    return;
                }

                // 'angular material' places target elements differently
                if (event.targetElement === 'select') {
                    this.formElement.value = event.newValue;
                } else {
                    this.formElement.querySelector(event.targetElement).value = event.newValue;
                }
            });
    }

    //////////// event catchers  ////////////////////
    
    private catchClick(event) {
        let shouldBeSent = true;

        const eventInfo = {
            elementNumber: this.elementNumber,
            targetElement: event.target.tagName.toLowerCase()
        };

        // if event initiated programatically don't react to it
        if (!event.isTrusted) {
            shouldBeSent = false;
        }

        if (event.target.tagName === 'SELECT' || event.target.tagName === 'MAT-SLIDER') {
            shouldBeSent = false;
        }
    
        if (shouldBeSent && !this.interviewFinished) {
            this.socketService.sendClick(eventInfo);
            this.statistic.logClick(event);
        }
    }
    
    private catchMouseMove(event) {
        const eventInfo = {
            elementNumber: this.elementNumber,
            eventType: event.type
        };

        this.socketService.sendMouseMovement(eventInfo);
    }

    private catchFocus(event) {
        const eventInfo = {
            elementNumber: this.elementNumber,
            targetElement: event.target.tagName.toLowerCase()
        };
        
        this.socketService.sendFocusEvent(eventInfo);
    }
    
    private catchTextInput(event) {
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

        this.keyboardEventHandler(event, newValue);
    }
    
    private catchSpecialKeys(event) {
        if (!event.key) {
            return;
        }
        if (event.key === 'Backspace'
            || event.key === 'Delete'
            || event.ctrlKey
            || event.key.slice(0, 5) === 'Arrow') {

            const newValue = event.target.value;

            this.keyboardEventHandler(event, newValue);

        // process focus caused by 'Tab' key
        } else if (event.key === 'Tab') {
            this.catchFocus(event);
        }
    }
    
    private keyboardEventHandler(event, newValue) {
        if (event.target.tagName === 'MAT-SLIDER'
              || event.target.tagName === 'SELECT') {
            return;
        }

        if (this.switchEventHandler(event)) {
            return;
        }

        const eventInfo = {
            newValue,
            elementNumber: this.elementNumber,
            elementType: event.target.tagName.toLowerCase()
        };
        
        this.socketService.sendKeysEvent(eventInfo);
    }

    private switchEventHandler(event) {
        let isSwitchEvent = false;
        const switchEventInfo = {
            elementNumber: this.elementNumber,
            targetElement: event.target.tagName.toLowerCase()
        };

        // if these elements were interacted by keyboard
        if (event.key.slice(0, 5) === 'Arrow' && event.target.type === 'radio') {
            isSwitchEvent = true;
            this.socketService.sendClick(switchEventInfo);
        }

        if ((event.target.type === 'checkbox' || event.target.type === 'radio')
            && event.key === ' ') {

            isSwitchEvent = true;
            this.socketService.sendClick(switchEventInfo);
        }

        return isSwitchEvent;
    }
    
    private catchOnChange(event) {
        if (!this.elementNumber) {
            return;
        }

        const eventInfo = {
            elementNumber: this.elementNumber,
            targetElement: null,
            newValue: null
        };

        if (event.source) {
            eventInfo.newValue = event.value;  // get new value of slider
        } else {
            eventInfo.targetElement = event.target.tagName.toLowerCase();
            eventInfo.newValue = event.target.value;
        }

        if (!this.interviewFinished) {
            this.socketService.sendOnChangeEvent(eventInfo);
            this.statistic.logValueChange(event);
        }
    }

    ngOnDestroy() {
        if (this.unsubClick) {
            this.unsubClick.unsubscribe();
            this.unsubMouseMove.unsubscribe();
            this.unsubFocus.unsubscribe();
            this.unsubKeyboard.unsubscribe();
            this.unsubOnChange.unsubscribe();
        }
    } 

}
