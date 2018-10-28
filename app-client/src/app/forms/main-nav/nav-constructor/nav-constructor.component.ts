import {Component, OnInit} from '@angular/core';

import {GetElementBroadcastService} from '../../services/get-element.broadcast.service';
import {SetElementBroadcastService} from '../../services/set-element.broadcast.service';

@Component({
    selector: 'app-nav-constructor',
    templateUrl: './nav-constructor.component.html',
    styleUrls: ['./nav-constructor.component.scss']
})
export class NavConstructorComponent implements OnInit {
    private stateConstructor: boolean;
    public elements: object;

    constructor(private getStateConstructor: GetElementBroadcastService, private setElem: SetElementBroadcastService) {
        this.getStateConstructor.subscriber()
            .subscribe(
                state => {
                    this.stateConstructor = state;
                    constructorActivation();
                });
    }

    ngOnInit() {
        this.elements = elements;
    }

    addElem(elem) {
        if (this.stateConstructor) {
            constructorActivation();
            this.stateConstructor = false;
            this.setElem.sendElem(elem);
        }
    }

}

function constructorActivation() {
    let constructor = Array.from(document.querySelectorAll('.mat-card'));

    constructor.forEach(elem => {
        elem.classList.toggle('activeElem');
    });
}

const elements = {
    text: {
        label: 'Name',
        type: 'text',
        handlers: [],
        config: {
            value: '',
            placeholder: '',
            disabled: false
        }
    },
    email: {
        label: 'Email',
        type: 'email',
        handlers: [],
        config: {
            value: '',
            placeholder: '',
            disabled: false
        }
    },
    number: {
        label: 'Price',
        type: 'number',
        handlers: [],
        config: {
            value: '',
            placeholder: '',
            min: 3,
            max: 10,
            disabled: false
        }
    },
    password: {
        label: 'Password',
        type: 'password',
        handlers: [],
        config: {
            value: '',
            placeholder: '',
            disabled: false
        }
    },
    slider: {
        label: 'Level',
        type: 'slider',
        handlers: [],
        config: {
            value: 120,
            invert: false,
            min: 5,
            max: 350,
            step: 5,
            thumbLabel: false,
            vertical: false,
            disabled: false
        }
    },
    toggle: {
        label: 'Click me!',
        type: 'toggle',
        handlers: [],
        config: {
            color: 'primary',
            checked: false,
            disabled: false
        }
    },
    select: {
        label: 'Choose',
        type: 'select',
        handlers: [],
        config: {
            value: '',
            placeholder: '',
            disabled: false,
            options: ['1', '2']
        }
    },
    textarea: {
        label: 'Description',
        type: 'textarea',
        handlers: [],
        config: {
            value: '',
            placeholder: '',
            disabled: false
        }
    },
    button: {
        label: 'Button',
        type: 'button',
        handlers: [],
        config: {
            type: '',
            color: 'primary',
            disabled: false
        }
    },
    radio: {
        label: 'Radio:',
        type: 'radio',
        handlers: [],
        config: {
            color: 'warn',
            disabled: false,
            options: ['1', '2', '3']
        }
    },
    checkbox: {
        label: 'Checkbox:',
        type: 'checkbox',
        handlers: [],
        config: {
            color: 'accent',
            disabled: false,
            options: ['1', '2', '3']
        }
    }
};
