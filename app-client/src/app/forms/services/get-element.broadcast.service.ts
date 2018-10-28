import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetElementBroadcastService {

    public index = new EventEmitter();

    activationConstructor() {
        this.index.emit(true);
    }

    subscriber() {
        return this.index;
    }
}
