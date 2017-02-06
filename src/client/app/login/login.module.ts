import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "@angular/material";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule, FormBuilder} from "@angular/forms";
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
  providers: []
})
export class LoginModule {
  constructor(private formBuilder: FormBuilder)
  {
    formBuilder.group({

    })
  }
}
