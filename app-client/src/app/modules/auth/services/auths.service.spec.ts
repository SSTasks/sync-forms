import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthsService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
  });

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('Should login', () => {
    const user = {
      username: 'epicmaster', 
      password: '12345'
    };
    
    service.login('epicmaster', '12345').subscribe(item => {
      expect(item).toEqual(user);
    });

    const request = httpMock.expectOne('/users/auth');
    expect(request.request.method).toBe('POST');

    request.flush(user);
  });

  it('Should logout', () => {
    service.logout().subscribe();

    const request = httpMock.expectOne('/users/logout');
    expect(request.request.method).toBe('GET');
  });

});
