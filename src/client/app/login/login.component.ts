import {Component, OnInit} from "@angular/core";
import {LoginUser} from "../shared/domain/LoginUser";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ValidateEmail} from "../common/validation/email-input.validator";
import {ValidatePassWord} from "../common/validation/password-input.validator";

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

  user: LoginUser = new LoginUser('', '');

  emailForm: FormGroup
  passwordForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
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
