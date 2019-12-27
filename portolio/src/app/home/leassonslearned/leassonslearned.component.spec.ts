import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeassonslearnedComponent } from './leassonslearned.component';

describe('LeassonslearnedComponent', () => {
  let component: LeassonslearnedComponent;
  let fixture: ComponentFixture<LeassonslearnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeassonslearnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeassonslearnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
