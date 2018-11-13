import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorPageComponent } from './constructor-page.component';

describe('ConstructorPageComponent', () => {
  let component: ConstructorPageComponent;
  let fixture: ComponentFixture<ConstructorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
