
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
*/


import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {PasswordValidator} from '../passwordValidator';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  form: FormGroup;
 constructor(fb: FormBuilder) {
    this.form = fb.group({
      username:["", Validators.required],
      password:["", Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    })
 }

  login() {
    console.log(this.form.value);
  }
}
