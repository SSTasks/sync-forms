import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Form } from './form';

@Injectable({
    providedIn: 'root'
})
export class BroadcastService {

    private active = new EventEmitter(); // value for activate constructor
    private elem = new EventEmitter(); // element for selected cell
    private config = new EventEmitter(); // config for selected element
    private form = new EventEmitter();
    private forms = new EventEmitter(); // current state of forms array

    public selectedForm: Form;  // selected form for interview and constructor

    // get current state of forms array
    currentForms(forms) {
        this.forms.emit(forms);
    }

    subscriberCurrentForms() {
        return this.forms;
    }

    // sending request to activate constructor
    activationConstructor() {
        this.active.emit(true);
    }

    subscriberActivationConstructor() {
        return this.active;
    }

    // sending element to the cell
    sendElem(elem) {
        this.elem.emit(elem);
    }

    subscriberSendElem() {
        return this.elem;
    }

    // sending request to activate config
    activationConfig(config) {
        this.config.emit(config);
    }

    subscriberActivationConfig() {
        return this.config;
    }

    // sending selected form
    selectForm(form) {
        console.log(form);
        this.selectedForm = JSON.parse(JSON.stringify(form));
        this.form.emit(form);
    }

    subscriberSelectForm() {
        return this.form;
    }
}
