import { TestBed } from '@angular/core/testing';
import { ScreenshotService } from './screenshot.service';
import { HttpService } from './http.service';
import { SnackbarComponent } from 'src/app/options/snackbar/snackbar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('ScreenshotService', () => {
  let httpService: HttpService;
  let snackbar: SnackbarComponent;
  let service: ScreenshotService;

  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      providers: [
        ScreenshotService, SnackbarComponent
        ],
      declarations: [SnackbarComponent],
     })
  )

  it('should be created', () => {
    service = TestBed.get(ScreenshotService);
    expect(service).toBeTruthy();
  });

});
 