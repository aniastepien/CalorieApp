import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiFormComponent } from './bmi-form.component';

describe('BmiFormComponent', () => {
  let component: BmiFormComponent;
  let fixture: ComponentFixture<BmiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
