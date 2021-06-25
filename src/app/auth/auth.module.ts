import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { IconModule } from "../icons/icon.module";

import { InputFocusDirective } from "./input-focus.directive";

@NgModule({
  declarations: [InputFocusDirective, ...AuthRoutingModule.componentsRouter],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    IconModule
  ]
})
export class AuthModule {}
