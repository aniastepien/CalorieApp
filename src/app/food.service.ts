import { Injectable } from '@angular/core';
import { FoodDB } from './food-db';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

private FoodCalorie = FoodDB;

  public getFoodCalorie() {
    return this.FoodCalorie;
  }

  constructor() { }
}
