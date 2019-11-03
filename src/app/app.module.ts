import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DayCalorieFormComponent } from './day-calorie-form/day-calorie-form.component';
import { BmiFormComponent } from './bmi-form/bmi-form.component';
import { FoodApiComponent } from './food-api/food-api.component';
import { CalculatorComponent } from './food-api/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DayCalorieFormComponent,
    BmiFormComponent,
    FoodApiComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormsModule
  ]
})
export class AppModule { }
