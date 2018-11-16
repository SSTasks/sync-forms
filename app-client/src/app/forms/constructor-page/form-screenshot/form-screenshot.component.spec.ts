import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormScreenshotComponent } from './form-screenshot.component';

describe('FormScreenshotComponent', () => {
  let component: FormScreenshotComponent;
  let fixture: ComponentFixture<FormScreenshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormScreenshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormScreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
