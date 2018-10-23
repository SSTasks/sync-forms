import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastElemService {

    public elem = new EventEmitter();

    setElem(elem) {
        this.elem.emit(elem);
    }

    subscriber() {
        return this.elem;
    }
}
