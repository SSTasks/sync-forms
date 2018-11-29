import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRemovingFormComponent } from './confirm-removing-form.component';

describe('ConfirmRemovingFormComponent', () => {
  let component: ConfirmRemovingFormComponent;
  let fixture: ComponentFixture<ConfirmRemovingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRemovingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemovingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
