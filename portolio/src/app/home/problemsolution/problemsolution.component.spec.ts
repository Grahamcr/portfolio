import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsolutionComponent } from './problemsolution.component';

describe('ProblemsolutionComponent', () => {
  let component: ProblemsolutionComponent;
  let fixture: ComponentFixture<ProblemsolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
