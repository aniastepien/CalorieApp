import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';
import { FoodService } from 'src/app/Food.service';


@Component({
  selector: 'app-food-api',
  templateUrl: './food-api.component.html',
  styleUrls: ['./food-api.component.scss']
})
export class FoodApiComponent implements OnInit {

  constructor(private Set: SettingsService, private FoodSrv: FoodService) { }

  private UserBmr = this.Set.userBmr;
  private UserBmi = this.Set.userBmi;
  private UserName = this.Set.userName;
  private FoodItems;

  ngOnInit() {
    this.FoodItems = this.FoodSrv.getFoodCalorie();
  }

}
