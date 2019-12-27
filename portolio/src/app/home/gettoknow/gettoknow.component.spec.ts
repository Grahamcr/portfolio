import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettoknowComponent } from './gettoknow.component';

describe('GettoknowComponent', () => {
  let component: GettoknowComponent;
  let fixture: ComponentFixture<GettoknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettoknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettoknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
