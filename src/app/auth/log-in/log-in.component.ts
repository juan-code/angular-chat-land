import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { MessageError } from "../Message-error.helper";

@Component({
  selector: "auth-login",
  templateUrl: "./log-in.component.html",
  styleUrls: ["../../form.style.css"]
})
export class LogInComponent implements OnInit {
  public loginForm: FormGroup;
  private messageManager: MessageError = new MessageError();
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.buildFormLogin();
  }
  private buildFormLogin() {
    this.loginForm = this.fb.group({
      email: this.fb.control(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      password: this.fb.control("", Validators.compose([Validators.required]))
    });
  }
  public getMessageError(typeError: string): string {
    return this.messageManager.getMessage(typeError);
  }
  public getErrorsByControl(control: string): string[] {
    const field: AbstractControl = this.loginForm.get(control);
    if ((field.touched || field.dirty) && field.errors) {
      return Object.keys(field.errors);
    }
    return [];
  }
  public onSubmit(form: FormGroup): void {
    if (!form.invalid) {
      this.router.navigateByUrl("/browse");
    } else {
      form.markAllAsTouched();
    }
  }
}
