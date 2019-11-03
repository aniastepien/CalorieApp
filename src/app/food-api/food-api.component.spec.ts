import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodApiComponent } from './food-api.component';

describe('FoodApiComponent', () => {
  let component: FoodApiComponent;
  let fixture: ComponentFixture<FoodApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
