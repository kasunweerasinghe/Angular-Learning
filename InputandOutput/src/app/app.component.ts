import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBeverages = "Cake";
  beverages = ['Milk', 'Egg', 'Coffee', 'Kottu']


  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage)
  }

  addNewTodayBeverage(newTodayBeverage: string) {
    this.currentBeverages = newTodayBeverage;
  }

}
