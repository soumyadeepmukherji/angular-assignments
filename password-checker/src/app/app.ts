import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  passwordForm: FormGroup;


  constructor() {

    this.passwordForm = new FormGroup({

      userId: new FormControl('', Validators.required),

      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(6)
      ]),

      confirmPassword: new FormControl(
        {
          value: '',
          disabled: true
        },
        Validators.required
      )

    });


    const passwordControl = this.passwordForm.get('password');

    const confirmPassword = this.passwordForm.get('confirmPassword');


    // Password value changes
    passwordControl?.valueChanges.subscribe(password => {

      if (password) {

        // Enable Confirm Password
        confirmPassword?.enable();

      }
      else {

        // Clear Confirm Password
        confirmPassword?.reset();

        // Disable Confirm Password
        confirmPassword?.disable();

      }

    });


    // Confirm Password status changes
    confirmPassword?.statusChanges.subscribe(state => {

      console.log(
        'Confirm Password:',
        state
      );

    });


    // Compare Password and Confirm Password
    confirmPassword?.valueChanges.subscribe(confirmValue => {

      const passwordValue =
        passwordControl?.value;


      if (confirmValue !== passwordValue) {

        confirmPassword.setErrors({
          passwordMismatch: true
        });

      }
      else {

        confirmPassword.setErrors(null);

      }

    });

  }


  submit() {

    console.log(this.passwordForm.value);

  }

}