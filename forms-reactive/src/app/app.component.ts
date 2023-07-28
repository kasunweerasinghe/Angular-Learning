import {Component, OnInit} from '@angular/core';
/*
this is form package. this is a group of controls.
 */
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  forbiddenUserName = ['max', 'chris']

  ngOnInit() {
    // in here we can initialize our form. we have to do that before rendering the form.
    this.signupForm = new FormGroup({
      // userData is nested form group
      'userData': new FormGroup({
        // need add controls('username','email'). controls mean key and value pair that we pass to that form object group.
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        //can add multiple Validators
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  // form submit on click
  onSubmit() {
    console.log(this.signupForm)
  }

  // create hobby
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    // casting
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  // create Custom form Validator.
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    // if validation is correct need to pass null or nothing.
    return null;
  }

}
