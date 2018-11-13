import {Component, OnInit} from '@angular/core';

import {BroadcastService} from '../../services/broadcast.service';

// templates for each of the element
const elements = {
    text: {
        type: 'text',
        handlers: [],
        config: {
            label: 'Name',
            value: '',
            placeholder: '',
            disabled: false,
            required: false
        }
    },
    email: {
        type: 'email',
        handlers: [],
        config: {
            label: 'Email',
            value: '',
            placeholder: '',
            disabled: false,
            required: false
        }
    },
    number: {
        type: 'number',
        handlers: [],
        config: {
            label: 'Price',
            value: '',
            placeholder: '',
            min: 3,
            max: 10,
            disabled: false,
            required: false
        }
    },
    password: {
        type: 'password',
        handlers: [],
        config: {
            label: 'Password',
            value: '',
            placeholder: '',
            disabled: false,
            required: false
        }
    },
    slider: {
        type: 'slider',
        handlers: [],
        config: {
            label: 'Level',
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
        type: 'toggle',
        handlers: [],
        config: {
            label: 'Click me!',
            color: 'primary',
            checked: false,
            disabled: false
        }
    },
    select: {
        type: 'select',
        handlers: [],
        config: {
            label: 'Choose',
            value: '',
            placeholder: '',
            disabled: false,
            required: false,
            options: ['1', '2']
        }
    },
    textarea: {
        type: 'textarea',
        handlers: [],
        config: {
            label: 'Description',
            value: '',
            placeholder: '',
            disabled: false
        }
    },
    button: {
        type: 'button',
        handlers: [],
        config: {
            value: 'button',
            type: '',
            color: 'primary',
            disabled: false
        }
    },
    radio: {
        type: 'radio',
        handlers: [],
        config: {
            label: 'Radio:',
            color: 'warn',
            vertical: false,
            disabled: false,
            required: false,
            options: ['1', '2', '3']
        }
    },
    checkbox: {
        type: 'checkbox',
        handlers: [],
        config: {
            label: 'Checkbox:',
            color: 'accent',
            vertical: false,
            disabled: false,
            required: false,
            options: ['1', '2', '3']
        }
    }
};

@Component({
    selector: 'app-nav-constructor',
    templateUrl: './nav-constructor.component.html',
    styleUrls: ['./nav-constructor.component.scss']
})
export class NavConstructorComponent implements OnInit {
    private stateConstructor: boolean;
    public elements: object;

    constructor(private broadcast: BroadcastService) {
        this.broadcast.subscriberActivationConstructor()
            .subscribe(
                state => {
                    this.stateConstructor = state;
                    constructorActivation(state);
                });
    }

    ngOnInit() {
        this.elements = elements;
    }

    addElem(elem) {
        if (this.stateConstructor) {
            this.stateConstructor = false;
            constructorActivation(this.stateConstructor);
            this.broadcast.sendElem(elem);
        }
    }

}

// add or remove class
function constructorActivation(state) {
    let constructor = Array.from(document.querySelectorAll('.mat-card'));
    constructor.forEach(elem => {
        if (state) {
            elem.classList.add('activeElem');
        } else {
            elem.classList.remove('activeElem');
        }
    });
}
