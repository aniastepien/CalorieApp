import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCalorieFormComponent } from './day-calorie-form.component';

describe('DayCalorieFormComponent', () => {
  let component: DayCalorieFormComponent;
  let fixture: ComponentFixture<DayCalorieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCalorieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCalorieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
