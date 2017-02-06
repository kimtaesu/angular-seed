import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ValidateEmail} from "../common/validation/email-input.validator";
import {ValidatePassWord} from "../common/validation/password-input.validator";
import {LoginService} from "./login.service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  user = {
    email: '', password: ''
  };
  loginService: LoginService
  emailForm: FormGroup
  passwordForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  onLogin(event:Event, email:string, pass:string) {
    console.info(email + " " + pass)
  }
  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      c_email: ['', [Validators.required, ValidateEmail]],
    });
    this.passwordForm = this.formBuilder.group({
      c_password: ['', [Validators.required, ValidatePassWord]],
    });
  }
}
