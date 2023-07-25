import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      // this holds arrays of form controls
      'hobbies': new FormArray([]) // we cas store multiple data inside this array
    })
    // get value when user type
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )

    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // )

    // set Values when content load
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@gmail.com'
      },
      'gender': 'male',
      'hobbies': [],
    })
  }

  onSubmit() {
    console.log(this.signupForm)
    this.signupForm.reset();// reset after press submit button
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

  // create async validator for check is email is correct or not
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

}
