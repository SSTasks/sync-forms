import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SetElementBroadcastService {

    public elem = new EventEmitter();

    sendElem(elem) {
        this.elem.emit(elem);
    }

    subscriber() {
        return this.elem;
    }
}
