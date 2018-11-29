import { TestBed } from '@angular/core/testing';
import io from 'socket.io-client';

import { StatisticService } from './statistic.service';

import { InfoToLog } from '../../models/logInfo.model';


describe('StatisticService', () => {
  localStorage.setItem('currentUser', JSON.stringify({
    fullname: 'Candidate 1',
    role: 'candidate'
  }));
  const loggedUser = JSON.parse(window.localStorage.getItem('currentUser'));

  let socket;
  const interviewId = 1;
  let originalTimeout;
  let service: StatisticService; // = TestBed.get(StatisticService);

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
    TestBed.configureTestingModule({});
    socket = io.connect('/');
    service = TestBed.get(StatisticService);
    service.setInterviewReference(socket, interviewId);
    spyOn(socket, 'emit');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 it('should set interviewId properly', () => {
    const interviewID = 1234567;

    service.setInterviewReference(socket, interviewID);
    expect(service.interviewId).toBe(interviewID);
  });

  describe('logConnectDisconnect', () => {
    it('should generate appropriate event info for logging \'connect\' event', () => {
      const actionToLog = 'connect';
      // to get precise time of creation
      const outputFromService = service.logConnectDisconnect(actionToLog);
  
      const expectedOutput = new InfoToLog(
        loggedUser.fullname,
        loggedUser.role,
        actionToLog,
        outputFromService.time,
        interviewId
      );
  
      expect(outputFromService).toEqual(expectedOutput);
    });
  
    it('should call socket if parameter \'connect\' was passed', () => {
      service.logConnectDisconnect('connect');
      expect(socket.emit).toHaveBeenCalled();
    });
  
    it('should not call socket if parameter \'disconnect\' was passed', () => {
      service.logConnectDisconnect('disconnect');
      expect(socket.emit).toHaveBeenCalledTimes(0);
    });
  
    it('should set interviewId to null if parameter \'disconnect\' was passed', () => {
      service.logConnectDisconnect('disconnect');
      expect(service.interviewId).toBe(null);
    });
  
    it('should not call socket if parameter \'finish\' was passed', () => {
      service.logConnectDisconnect('finish');
      expect(socket.emit).toHaveBeenCalledTimes(0);
    });

  });

  describe('logClick', () => {
    it('should create appropriate event info if element\'s passed className has substring \'checkbox\'', () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Checkbox label',
          className: 'tag-info-checkbox-info',
          firstChild: {}
        }
      };
      const outputFromService = service.logClick(passedEvent);
      const expectedOutput = new InfoToLog(
          loggedUser.fullname,
          loggedUser.role,
          'click',
          outputFromService.time,
          interviewId,
          'checkbox',
          'Checkbox label'
      );

      expect(outputFromService).toEqual(expectedOutput);
    });

    it(`should call extractToggleLabel method with passed event
    if element's passed className has substring 'toggle'`, () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Toggle label',
          className: 'tag-toggle-info-info',
          localName: 'span',
          firstChild: {}
        }
      };

      spyOn(service, 'extractToggleLabel');
      service.logClick(passedEvent);

      expect(service.extractToggleLabel).toHaveBeenCalledWith(passedEvent);
    });

    it('should create appropriate event info if element\'s passed className has substring \'toggle\'', () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Toggle label',
          className: 'tag-toggle-info-info',
          localName: 'span',
          firstChild: {}
        }
      };
      const outputFromService = service.logClick(passedEvent);
      const expectedOutput = new InfoToLog(
          loggedUser.fullname,
          loggedUser.role,
          'click',
          outputFromService.time,
          interviewId,
          'toggle',
          'Toggle label'
      );

      expect(outputFromService).toEqual(expectedOutput);
    });

    it(`should call extractRadioLabel method with element extracted from parameter
     if element's passed className has substring 'radio'`, () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Radiobutton label',
          className: 'tag-info-radio-label',
          firstChild: {}
        }
      };

      spyOn(service, 'extractRadioLabel');
      service.logClick(passedEvent);

      expect(service.extractRadioLabel).toHaveBeenCalledWith(passedEvent.target);
    });

    it('should create appropriate event info if element\'s passed className has substring \'radio\'', () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Radiobutton label',
          className: 'tag-info-radio-label',
          firstChild: {}
        }
      };
      const outputFromService = service.logClick(passedEvent);
      const expectedOutput = new InfoToLog(
          loggedUser.fullname,
          loggedUser.role,
          'click',
          outputFromService.time,
          interviewId,
          'radiobutton',
          'Radiobutton label'
      );

      expect(outputFromService).toEqual(expectedOutput);
    });

    it('shouldn\'t call any sockets if passed element doesn\'t have an appropriate structure', () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Label',
          className: 'tag-info',
          firstChild: {}
        }
      };

      service.logClick(passedEvent);
      expect(socket.emit).toHaveBeenCalledTimes(0);
    });

    it('should call socket if passed element has an appropriate structure', () => {
      const passedEvent = {
        type: 'click',
        target: {
          innerText: 'Label',
          className: 'tag-info-checkbox',
          firstChild: {}
        }
      };

      service.logClick(passedEvent);
      expect(socket.emit).toHaveBeenCalled();
    });   

  });
  
  describe('logValueChange', () => {
    it('should generate appropriate event info for logging change event', () => {
      const eventToLog = {
        type: 'change',
        target: {
          localName: 'tag of element',
          value: 'some value',
          labels: [{
            innerText: 'Value of label'
          }]
        }
      };

      const outputFromService = service.logValueChange(eventToLog);
  
      const expectedOutput = new InfoToLog(
          loggedUser.fullname,
          loggedUser.role,
          'change',
          outputFromService.time,
          interviewId,
          'tag of element',
          'Value of label',
          'some value',
      );
  
      expect(outputFromService).toEqual(expectedOutput);
    });

    it('should call socket with prepared information as the second parameter', () => {
      const eventToLog = {
        type: 'change',
        target: {
          localName: 'tag of element',
          value: 'some value',
          labels: [{
            innerText: 'Value of label'
          }]
        }
      };

      const outputFromService = service.logValueChange(eventToLog);
  
      const infoToBeSent = new InfoToLog(
          loggedUser.fullname,
          loggedUser.role,
          'change',
          outputFromService.time,
          interviewId,
          'tag of element',
          'Value of label',
          'some value',
      );
  
      expect(socket.emit).toHaveBeenCalledWith('logEvent', infoToBeSent);
    });

    it('should call logSliderChange if it got object that contains \'source\' field', () => {
      const eventToLog = {
        type: 'change',
        source: {},
        target: {
          localName: 'tag of element',
          value: 'some value'
        }
      };

      spyOn(service, 'logSliderChange');
      service.logValueChange(eventToLog);
  
      expect(service.logSliderChange).toHaveBeenCalled();
    });
  });

});
