
/*
  1. Imported formgroup, formcontrol, and validators from Angular Core
  2. created a new property called form and initialize it with "new FormGroup"
    - We pass in two FormControl objects, username and password into FormGroup()
      - First parameter in FormControl is optional. It is useful when we display existing data in the control for the user to edit. We first retreive the existing value from the server and populate the control with it.
      - Second parameter is the Validator function. Validators provide a set of validators like required, minlength, maxlength. 
  3. Creating the login method that is binded to ngSubmit
*/


import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login() {
    console.log(this.form.value);
  }
}
