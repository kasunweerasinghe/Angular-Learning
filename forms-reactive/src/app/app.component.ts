import {Component, OnInit} from '@angular/core';
/*
this is form package. this is a group of controls.
 */
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      // userData is nested form group
      'userData': new FormGroup({
        // need add controls('username','email'). controls mean key and value pair that we pass to that form object group.
        'username': new FormControl(null, Validators.required),
        //can add multiple Validators
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
    });
  }

  // form submit on click
  onSubmit() {
    console.log(this.signupForm)
  }

}
