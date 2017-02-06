import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "@angular/material";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {LoginService} from "./login.service";
@NgModule({
  imports: [CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
  providers: [LoginService]
})
export class LoginModule {
  constructor(private formBuilder: FormBuilder)
  {
    formBuilder.group({

    })
  }
}
