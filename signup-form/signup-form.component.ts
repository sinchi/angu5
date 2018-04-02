import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  public form: FormGroup;

  constructor(fb: FormBuilder) {
    /*this.form = new FormGroup({
      account: new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ], UsernameValidators.shouldBeUnique),
        password: new FormControl('', Validators.required)
      })
    });*/

    this.form = fb.group({
      account: fb.group({
        username: ['', [Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ], UsernameValidators.shouldBeUnique],
        password: ['', Validators.required]
      })
    });

   }

  ngOnInit() {
  }

  get username() {
    return this.form.get('account.username');
  }

  login(): void {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
