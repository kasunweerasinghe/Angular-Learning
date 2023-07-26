import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // here we connect these property with html property and using @Input() this properties can access from parent
  // srvElement is the name that we can use from parent(app) to catch the property. and we call this Alias
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
