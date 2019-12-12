import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignbitsComponent } from './designbits.component';

describe('DesignbitsComponent', () => {
  let component: DesignbitsComponent;
  let fixture: ComponentFixture<DesignbitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignbitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
