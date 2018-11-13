import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConstructorComponent } from './nav-constructor.component';

describe('NavConstructorComponent', () => {
  let component: NavConstructorComponent;
  let fixture: ComponentFixture<NavConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
