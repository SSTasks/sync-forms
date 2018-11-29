import { TestBed } from '@angular/core/testing';
import { SocketService } from './socket-service.service';
import { Observable } from 'rxjs';
let service: SocketService;
let userInfo:any;
let id: number;
let originalTimeout;
let eventInfo: any;
let io = require('socket.io-client'),
 socketURL = '/',
 options = {
 transports: ['websocket'],
 'force new connection': true,
 'reconnection delay' : 0,
 'reopen delay' : 0
 };
 describe('Server', function() {
 let socket;
 beforeEach(function(done) {
   // Setup
   originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
   console.log('Establishing connection');
   socket = io.connect(socketURL, options);

   socket.on('connect', function() {
     console.log('worked');
     done();
   });
 });
 it('Should connect to sockets', () => {
   expect(socket).toBeTruthy();
 });
});


describe('SocketService', () => {

beforeEach(() => {service = TestBed.get(SocketService);});

it('Should call join Interview', () => {
   spyOn( service, 'joinInterview');
   service.joinInterview(userInfo);
   expect(service.joinInterview).toHaveBeenCalledWith(userInfo);
});

it('Should end Interview', () => {
   spyOn( service, 'endInterview');
   service.endInterview(userInfo);
   expect(service.endInterview).toHaveBeenCalledWith(userInfo);
});

it('Should update Interview List', () => {
 spyOn( service, 'updateInterviewList');
 service.updateInterviewList();
 expect(service.updateInterviewList).toHaveBeenCalled();
});

it('Should send Click', () => {
 spyOn( service, 'sendClick');
 service.sendClick(eventInfo);
 expect(service.sendClick).toHaveBeenCalledWith(eventInfo);
});

it('Should send Mouse Movement', () => {
 spyOn( service, 'sendMouseMovement');
 service.sendMouseMovement(eventInfo);
 expect(service.sendMouseMovement).toHaveBeenCalledWith(eventInfo);
});

it('Should send Focus Event', () => {
 spyOn( service, 'sendFocusEvent');
 service.sendFocusEvent(eventInfo);
 expect(service.sendFocusEvent).toHaveBeenCalledWith(eventInfo);
});

it('Should send Keys Event', () => {
 spyOn( service, 'sendKeysEvent');
 service.sendKeysEvent(eventInfo);
 expect(service.sendKeysEvent).toHaveBeenCalledWith(eventInfo);
});

it('Should send On Changet Event', () => {
 spyOn( service, 'sendOnChangeEvent');
 service.sendOnChangeEvent(eventInfo);
 expect(service.sendOnChangeEvent).toHaveBeenCalledWith(eventInfo);
});

it('Should get Click Event', () => {
 spyOn( service, 'getClickEvent');
 service.getClickEvent();
 expect(service.getClickEvent).toHaveBeenCalled();
});

it('Should get Mouse Move', () => {
 spyOn( service, 'getMouseMove');
 service.getMouseMove();
 expect(service.getMouseMove).toHaveBeenCalled();
});

it('Should get Focus Event', () => {
 spyOn( service, 'getFocusEvent');
 service.getFocusEvent();
 expect(service.getFocusEvent).toHaveBeenCalled();
});

it('Should get Keyboard Event', () => {
 spyOn( service, 'getKeyboardEvent');
 service.getKeyboardEvent();
 expect(service.getKeyboardEvent).toHaveBeenCalled();
});

it('Should get On Change Event', () => {
 spyOn( service, 'getOnChangeEvent');
 service.getOnChangeEvent();
 expect(service.getOnChangeEvent).toHaveBeenCalled();
});


it('Should get Keyboard Event', () => {
 spyOn( service, 'getKeyboardEvent');
 service.getKeyboardEvent();
 expect(service.getKeyboardEvent).toHaveBeenCalled();
});



});



