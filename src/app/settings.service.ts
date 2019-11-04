import { Injectable } from '@angular/core';
import { DayCalorieFormComponent } from './day-calorie-form/day-calorie-form.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  userBmr;
  userBmi;
  userName;
  BmrPoliczone = false;

  constructor() { }
}
