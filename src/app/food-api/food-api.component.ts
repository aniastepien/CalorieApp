import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';
import { FoodService } from 'src/app/Food.service';
import { FoodItemCal } from '../food';


@Component({
  selector: 'app-food-api',
  templateUrl: './food-api.component.html',
  styleUrls: ['./food-api.component.scss']
})
export class FoodApiComponent implements OnInit {

  private UserBmr = this.Set.userBmr;
  private UserBmi = this.Set.userBmi;
  private UserName = this.Set.userName;
  private FoodItems;
  private BmrPoliczone;
  private DayCalories = 0;
  private EatenFoods: Array<FoodItemCal> = [];

  constructor(private Set: SettingsService, private FoodSrv: FoodService) { }

  onSubmit(form) {
    console.log(form.value);
    this.CalorieTable(form.value);
  }





CalorieTable(result) {

  let index = result.FoodItems;




  console.log(this.FoodItems[index].calories);
  console.log(this.FoodItems[index].name);
  console.log(this.FoodItems[index].weight);
  this.EatenFoods.push(this.FoodItems[index]);

}



  ngOnInit() {
    this.FoodItems = this.FoodSrv.getFoodCalorie();
    this.BmrPoliczone = this.Set.BmrPoliczone;
    console.log(this.BmrPoliczone);
  }

}
