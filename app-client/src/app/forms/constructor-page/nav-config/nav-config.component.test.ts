import {async, ComponentFixture, TestBed} from '@angular/core/testing';

// import { NavConstructorComponent } from './nav-constructor.component';
import { NavConstructorComponent } from '../nav-constructor/nav-constructor.component';
import {NavConfigComponent} from './nav-config.component';

describe('NavConfigComponent', () => {
  let component: NavConfigComponent;
  let fixture: ComponentFixture<NavConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
