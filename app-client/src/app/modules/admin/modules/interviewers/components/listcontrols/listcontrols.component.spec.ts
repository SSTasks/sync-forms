import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControls } from './listcontrols.component';

describe('CrudComponent', () => {
  let component: ListControls;
  let fixture: ComponentFixture<ListControls>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListControls ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
