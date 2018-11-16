import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = '/';
  private socket;
  public interviewId: Number;

  constructor() { }

  public connectToSockets() {
    this.socket = io.connect(this.url);
  }

  public setInterviewId(id) {
    this.interviewId = id;
  }

  public initiateInterview(interviewData) {
    this.interviewId = interviewData.interviewId;
    this.socket.emit('initiateInterview', interviewData);
  }

  public joinInterview() {
    this.socket.emit('joinInterview', this.interviewId);
  }

  public endInterview() {
    // if we weren't connected, there is no need to unsub
    if (!this.socket) {
      return;
    }

    this.socket.emit('endInterview', this.interviewId);
    this.interviewId = null;
  }

  public updateInterviewList() {
    const interviewInfoProvider = new Observable(observer => {
      this.socket.on('updateInterviewList', (interviewData) => {
        observer.next(interviewData);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return interviewInfoProvider; 
  }

  // interview events

  public sendClick(eventInfo) {
    eventInfo.interviewId = this.interviewId;
    this.socket.emit('click', eventInfo);
  }

  public sendMouseMovement(eventInfo) {
    eventInfo.interviewId = this.interviewId;
    this.socket.emit('mouseMove', eventInfo);
  }

  public sendFocusEvent(eventInfo) {
    eventInfo.interviewId = this.interviewId;
    this.socket.emit('focusEvent', eventInfo);
  }
  
  public sendKeysEvent(eventInfo) {
    eventInfo.interviewId = this.interviewId;
    this.socket.emit('keyPress', eventInfo);
  }

  public sendOnChangetEvent(eventInfo) {
    eventInfo.interviewId = this.interviewId;
    this.socket.emit('onChange', eventInfo);
  }

  public getClickEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('mouseClick', (eventData) => {
        observer.next(eventData);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable.pipe(debounceTime(100)); 
  }

  public getMouseMove() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newMouseMove', (eventData) => {
        observer.next(eventData);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }

  public getFocusEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newFocus', (eventData) => {
        observer.next(eventData);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }

  public getKeyboardEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newKeyPress', (eventData) => {
        observer.next(eventData);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }

  public getOnChangeEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newOnChange', (eventData) => {
        observer.next(eventData);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }
}
