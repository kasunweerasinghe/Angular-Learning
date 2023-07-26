import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  // input using pass data from parent to child
  @Input() beverages = "";

  // this used for send data child to parent
  @Output() newBeverageEvent = new EventEmitter<string>();


  ngOnInit() {
  }

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }
}
