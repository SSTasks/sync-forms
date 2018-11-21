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

  public joinInterview(userInfo) {
    const connectionInfo = this.emitConnectionMessage(userInfo, 'connect');

    this.socket.emit('joinInterview', connectionInfo);
  }

  public endInterview(userInfo) {
    // if we weren't connected, there is no need to unsub
    if (!this.socket) {
      return;
    }
    const eventInfo = this.emitConnectionMessage(userInfo, 'end interview');

    this.socket.emit('endInterview', eventInfo);
    this.interviewId = null;
  }

  public emitConnectionMessage(userInfo, eventType) {
    const role = userInfo.role[0].toUpperCase() + userInfo.role.slice(1);
    let messageText = `${role} ${userInfo.fullname}`;

    const connectionInfo = {
      interviewId: this.interviewId,
      messageText
    };

    if (eventType === 'connect') {
      connectionInfo.messageText += ' has joined the interview';
      return connectionInfo;

    } else if (eventType === 'end interview') {
      connectionInfo.messageText += ' has finished the interview. Thank you for participating.';
      return connectionInfo;

    } else {
      connectionInfo.messageText += ' has left the interview';

      this.socket.emit('onLeave', connectionInfo);
    }
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

  public showMessage() {
    const messageObservable = new Observable(observer => {
      this.socket.on('showMessage', (message) => {
        observer.next(message);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return messageObservable; 
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

  public finishInterview() {
    const eventObservable = new Observable(observer => {
      this.socket.on('finishInterview', (triggerFinish) => {
        observer.next(triggerFinish);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }
}
