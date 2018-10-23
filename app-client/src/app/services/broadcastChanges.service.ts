import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChangesService {

    public elem = new EventEmitter();

    setChanges(elem) {
        this.elem.emit(elem);
    }

    subscriber() {
        return this.elem;
    }
}
