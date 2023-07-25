import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  //FormGroup helps to manage and handle form controls as a group
  signupForm: FormGroup;
  forbiddenUserName = ['Chris', 'Anna'];


  // Initialize The Form
  ngOnInit() {
    this.signupForm = new FormGroup({
      // userData is nested Form Group
      'userData': new FormGroup({
        //we can add some values like 'kasun' as a username but here its null. Validators used for validation
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      // this holds arrays of form controls
      'hobbies': new FormArray([]) // we cas store multiple data inside this array
    })
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control) //casting
  }

  // Custom Validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserName.indexOf(control.value) != -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
