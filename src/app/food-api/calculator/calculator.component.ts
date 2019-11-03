import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {



  constructor(private Set: SettingsService ) { }


  private UserBmr = this.Set.userBmr;

  ngOnInit() {
  }

}
