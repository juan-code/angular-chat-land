import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "signin",
        component: LogInComponent
      },
      {
        path: "signup",
        component: RegisterComponent
      },
      {
        path: "reset",
        component: ResetPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  static componentsRouter: any[] = [
    LogInComponent,
    AuthComponent,
    RegisterComponent,
    ResetPasswordComponent
  ];
}
