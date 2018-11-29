import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntreviewsListComponent } from './interviews-list.component';

describe('IntreviewsListComponent', () => {
  let component: IntreviewsListComponent;
  let fixture: ComponentFixture<IntreviewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntreviewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntreviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
