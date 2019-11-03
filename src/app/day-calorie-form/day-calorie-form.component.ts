import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { format } from 'url';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-day-calorie-form',
  templateUrl: './day-calorie-form.component.html',
  styleUrls: ['./day-calorie-form.component.scss']
})

export class DayCalorieFormComponent implements OnInit {

  bmrPoliczone = false;
  UserBmr = 0;
  name = '';
  genders = ['K', 'M'];
  activities = [
    {name: 'brak aktywności, praca siedząca', value: 1.2 },
    {name: 'niska aktywność (praca siedząca i 1-2 treningi w tygodniu)', value: 1.3 },
    {name: 'średnia aktywność (praca siedząca i treningi 3-4 razy w tygodniu)', value: 1.5 },
    {name: 'wysoka aktywność (praca fizyczna i 3-4 treningi w tygodniu)', value: 1.7 },
    {name: 'bardzo wysoka aktywność (zawodowi sportowcy, osoby codziennie trenujące)', value: 1.9 }];

  constructor(private Set: SettingsService) { }

onSubmit(form) {
  console.log(form.value);
  this.BMR(form.value);
  this.name = form.value.name;

}


BMR(result) {

  if (result.genderValue === 'K') {

    this.UserBmr = ((9.99 * result.wight) + (6.25 * result.hight) - (4.92 * result.age) - 161) * result.activities;

  } else {

    this.UserBmr = ((9.99 * result.wight) + (6.25 * result.hight) - (4.92 * result.age) + 5) * result.activities;

  }
  this.bmrPoliczone = true;
  this.Set.userBmr = this.UserBmr;
  this.Set.userName = result.name;
}


  ngOnInit() {
  }

}
