import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColordiamondComponent } from './colordiamond.component';

describe('ColordiamondComponent', () => {
  let component: ColordiamondComponent;
  let fixture: ComponentFixture<ColordiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColordiamondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColordiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
