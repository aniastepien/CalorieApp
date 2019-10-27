import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent implements OnInit {

  bmiPoliczone = false;
  UserBmi = 0;

  genders = ['K', 'M'];

  constructor() { }

  onSubmit(form) {
    console.log(form.value);
    this.BMI(form.value);
  }

BMI(result) {

  this.UserBmi = (result.wight) / Math.pow( ((result.hight) / 100 ), 2);
  this.bmiPoliczone = true;
}


  ngOnInit() {
  }

}
