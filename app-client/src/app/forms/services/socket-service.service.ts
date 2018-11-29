import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import io from 'socket.io-client';

import { StatisticService } from './statistic.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = '/';
  private socket;
  public interviewId: Number;

  constructor(private statistic: StatisticService) { }

  public connectToSockets() {
    this.socket = io.connect(this.url);
  }

  public setInterviewId(id) {
    this.interviewId = id;
  }

  public initiateInterview(interviewData) {
    this.interviewId = interviewData.interviewId;
    interviewData.creationTime = this.statistic.getCurrentTime();
    
    this.socket.emit('initiateInterview', interviewData);
    this.statistic.setInterviewReference(this.socket, this.interviewId);
  }

  public joinInterview(userInfo) {
    const eventInfo = {
      interviewId: this.interviewId,
      messageText: this.emitConnectionMessage(userInfo, 'connect')
    };

    this.socket.emit('joinInterview', eventInfo);
    this.statistic.setInterviewReference(this.socket, this.interviewId);
    this.statistic.logConnectDisconnect('connect');
  }

  public exitInterview(userInfo) {
    // if we weren't connected, there is no need to unsub
    if (!this.socket || !this.interviewId) {
      return;
    }

    const eventInfo = {
      interviewId: this.interviewId,
      messageText: this.emitConnectionMessage(userInfo, 'disconnect'),
      infoToLog: this.statistic.logConnectDisconnect('disconnect')
    };

    this.socket.emit('onLeave', eventInfo);
    this.detachInterviewData();
  }

  // triggers ending of interview
  public endInterview(userInfo) {
    // if we weren't connected, there is no need to unsub
    if (!this.socket || !this.interviewId) {
      return;
    }

    const eventInfo = {
      interviewId: this.interviewId,
      messageText: this.emitConnectionMessage(userInfo, 'finish'),
      infoToLog: this.statistic.logConnectDisconnect('finish')
    };

    this.socket.emit('endInterview', eventInfo);
    this.detachInterviewData();
  }

  public detachInterviewData() {
    this.interviewId = null;
    this.statistic.setInterviewReference(null, this.interviewId);
  }

  // triggers closing of interview for participants if interviewer ended it
  public finishNotificator() {
    const eventObservable = new Observable(observer => {
      this.socket.on('interviewFinished', (triggerFinish) => {
        observer.next(triggerFinish);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return eventObservable;
  }

  private emitConnectionMessage(userInfo, eventType) {
    const role = userInfo.role[0].toUpperCase() + userInfo.role.slice(1);
    let messageText = `${role} ${userInfo.fullname}`;

    if (eventType === 'connect') {
      messageText += ' has joined the interview';

    } else if (eventType === 'disconnect') {
      messageText += ' has left the interview';

    } else {
      messageText += ' has finished the interview. Thank you for participating.';
    }

    return messageText;
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

  // interview event related methods

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

  public sendOnChangeEvent(eventInfo) {
    eventInfo.interviewId = this.interviewId;
    this.socket.emit('onChange', eventInfo);
  }

  public getClickEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('mouseClick', (eventData) => {
        observer.next(eventData);
      });
    });

    return eventObservable.pipe(debounceTime(100)); 
  }

  public getMouseMove() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newMouseMove', (eventData) => {
        observer.next(eventData);
      });
    });

    return eventObservable;
  }

  public getFocusEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newFocus', (eventData) => {
        observer.next(eventData);
      });
    });

    return eventObservable;
  }

  public getKeyboardEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newKeyPress', (eventData) => {
        observer.next(eventData);
      });
    });

    return eventObservable;
  }

  public getOnChangeEvent() {
    const eventObservable = new Observable(observer => {
      this.socket.on('newOnChange', (eventData) => {
        observer.next(eventData);
      });
    });

    return eventObservable;
  }
}
