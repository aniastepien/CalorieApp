import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent implements OnInit {

  bmiPoliczone = false;
  UserBmi = 0;
  BmiResoult = '';

  genders = ['K', 'M'];

  bmiMeaning = [
    {name: 'niedowaga', value: 18.5 },
    {name: 'waga prawidłowa', value: 25 },
    {name: 'nadwaga', value: 30 },
    {name: 'otyłość', value: 999}
  ];

  constructor() { }

  onSubmit(form) {
    console.log(form.value);
    this.BMI(form.value);
  }

BMI(result) {

  this.UserBmi = (result.wight) / Math.pow( ((result.hight) / 100 ), 2);
  this.bmiPoliczone = true;

  for (let o of this.bmiMeaning ) {
    if (this.UserBmi <= o.value) {
    console.log(o.name);
    this.BmiResoult = o.name;
    break;
      }
  }
}


  ngOnInit() {
  }

}


