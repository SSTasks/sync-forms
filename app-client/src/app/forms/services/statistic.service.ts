import { Injectable } from '@angular/core';
import { InfoToLog } from '../../models/logInfo.model';
import { User } from '../../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private currentUser: User = JSON.parse(window.localStorage.getItem('currentUser'));
  private socket;
  public interviewId: Number;

  constructor() { }

  public setInterviewReference(socket, interviewId) {
    this.socket = socket;
    this.interviewId = interviewId;
    this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
  }

  public logConnectDisconnect(action) {
    const infoToLog = new InfoToLog(
      this.currentUser.fullname,
      this.currentUser.role,
      action,
      this.getCurrentTime(),
      this.interviewId
    );

    if (action === 'connect') {
      this.socket.emit('logEvent', infoToLog);

    } else {
      this.interviewId = null;
    }

    // return info instead of logging it right here because of
    // a bug that appears when closing inactive tab with interview
    return infoToLog;
  }

  public logClick(event) {
    let targetTag: String;
    let targetLabel: String;

    // handler for toggle
    if (event.target.className.indexOf('toggle') !== -1) {
      targetTag = 'toggle';
      targetLabel = this.extractToggleLabel(event);
    }

    // handler for radio
    if (event.target.className.indexOf('radio') !== -1) {
      targetTag = 'radiobutton';
      targetLabel = this.extractRadioLabel(event.target);
     } 

    // handler for checkboxes
    if (event.target.className.indexOf('checkbox') !== -1) {
      targetTag = 'checkbox';
      targetLabel = event.target.firstChild.value ? event.target.firstChild.value : event.target.innerText;
    }
    
    // handler for other elements
    if (!targetTag && (event.target.innerText || event.target.labels)) {
      targetTag = event.target.localName;
      targetLabel = event.target.innerText ? event.target.innerText : event.target.labels[0].innerText;
    }

    if (targetTag) {
      const infoToLog = new InfoToLog(
        this.currentUser.fullname,
        this.currentUser.role,
        event.type,
        this.getCurrentTime(),
        this.interviewId,
        targetTag,
        targetLabel
      );

      this.socket.emit('logEvent', infoToLog);
      return infoToLog;
    }
  }

  public logValueChange(event) {
    if (event.source) {
      this.logSliderChange(event);
      return;
    }

    const targetTag = event.target.localName;
    const targetLabel = event.target.labels[0].innerText;

    const infoToLog = new InfoToLog(
      this.currentUser.fullname,
      this.currentUser.role,
      event.type,
      this.getCurrentTime(),
      this.interviewId,
      targetTag,
      targetLabel,
      event.target.value
    );

    this.socket.emit('logEvent', infoToLog);
    
    return infoToLog;
  }

  private logSliderChange(event) {
    if (!event.source._elementRef) {
      return;
    }

    const eventType = 'change';
    const targetTag = 'slider';
    const targetLabel = event.source._elementRef.nativeElement.previousElementSibling.innerText;

    const infoToLog = new InfoToLog(
      this.currentUser.fullname,
      this.currentUser.role,
      eventType,
      this.getCurrentTime(),
      this.interviewId,
      targetTag,
      targetLabel,
      event.value
    );

    this.socket.emit('logEvent', infoToLog);
  }

  private extractToggleLabel(event) {
    let targetLabel: string;

    if (event.target.className.indexOf('thumb') !== -1) {
      targetLabel = event.path[3].innerText;
    } else if (event.target.localName === 'label' || event.target.localName === 'span') {
      targetLabel = event.target.innerText;
    } else {
      targetLabel = event.target.parentNode.innerText;
    }

    return targetLabel;
  }

  private extractRadioLabel(element) {
    let targetLabel: string;
    
    if (element.className.indexOf('label') !== -1) {
      targetLabel = element.innerText;
    } else {
      const infoPlacement = element.parentNode.innerText;
      targetLabel = infoPlacement ? infoPlacement : element.parentNode.lastChild.labels[0].innerText;
    }

    return targetLabel;
  }

  public getCurrentTime() {
    return Date.now();
  }
}
