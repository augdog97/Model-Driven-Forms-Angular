
/*
  1. Imported formgroup, FormBuilder, and validators from Angular Core
    - FormBuilder class allows to declare FormControl and FormGroup objects more compactly.
  2. Using dependency injection to get an instance of FormBuilder, fb. FormBuilder has a method group which takes in a shortened code for new FormControl. 
      - The group method returns a FormGroup object as a result and we store it in "form".
      - FormBuilder is like syntactic sugar that shortens the new FormGroup() and new FormControl() code that can build up in larger forms.
      - First parameter in FormControl is optional. It is useful when we display existing data in the control for the user to edit. We first retreive the existing value from the server and populate the control with it.
      - Second parameter is the Validator function. Validators provide a set of validators like required, minlength, maxlength. 
  3. Import the PasswordValidator and apply it to "password". Because we have more than one validator on "password" form control, we need to compose the multiple validators by calling Validators.compose method. 
    - The compost method takes in an array of validators. 
  4. Creating the login method that is binded to ngSubmit
    - Imported and used dependency injection in the construcvtor to get an instance of LoginService. 
    - login() method calls login method in loginService instance with the user-keyed in values of username and password. 
      - this.form.controls['password'], this.form.controls['username']. Access the value property of username and password control inside "form" to get user-keyed in values
    - login method returns result as true if the login creds are valid. If false, we access the password FormControl with this.form.controls['password'] and call its setErrors method to supply the error invalidLogin: true. 
    - true can also be replaced with a value or object to provide more details about the validation. 
*/


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidator } from '../passwordValidator';
import { LoginService } from '../login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  form: FormGroup;

  constructor(fb: FormBuilder, private _loginService: LoginService) {

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
      PasswordValidator.cannotContainSpace])]
    })
  }

  login() {
    var result = this._loginService.login(this.form.controls['username'].value,
      this.form.controls['password'].value);

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }
}