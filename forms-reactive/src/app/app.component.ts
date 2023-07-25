import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  //FormGroup helps to manage and handle form controls as a group
  signupForm: FormGroup;

  // Initialize The Form
  ngOnInit() {
    this.signupForm = new FormGroup({
      //we can add some values like 'kasun' as a username but here its null. Validators used for validation
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
    })
  }

  onSubmit() {
    console.log(this.signupForm)
  }

}
