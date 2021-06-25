import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "auth-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["../../form.style.css"]
})
export class ResetPasswordComponent implements OnInit {
  public formReset: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildFormReset();
  }

  private buildFormReset() {
    this.formReset = this.fb.group({
      email: this.fb.control(
        "",
        Validators.compose([Validators.required, Validators.email])
      )
    });
  }
}
