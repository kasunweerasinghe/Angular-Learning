import {Component, OnInit} from '@angular/core';
/*
this is form package. this is a group of controls.
 */
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    // in here we can initialize our form. we have to do that before rendering the form.
    this.signupForm = new FormGroup({
      // need add controls. controls mean key and value pair that we pass to that form object group.
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male'),
    });
  }

}
