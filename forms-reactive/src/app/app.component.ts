import {Component, OnInit} from '@angular/core';
/*
this is form package. this is a group of controls.
 */
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });


    // valueChanges is s observable. in here every key stroke data will print
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // statusChanges is s observable. in here when after type something check the status is it valid or not.
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    // in here we can preset values to the input fields
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Kasun',
    //     'email': 'kasun@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // })

  }


  // form submit on click
  onSubmit() {
    console.log(this.signupForm);
    
    // reset values after enter data input fields and press submit button
    // this.signupForm.reset()
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

  // Creating a Custom Async Validator
  // (Promise<any> | Observable<any>) these are 2 constructs which handle asynchronous data.
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test@gmail.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null)
        }
      }, 1500)
    })

    return promise;
  }

}
