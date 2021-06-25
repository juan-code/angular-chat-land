import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { MessageError } from "../Message-error.helper";

@Component({
  selector: "auth-signup",
  templateUrl: "./register.component.html",
  styleUrls: ["../../form.style.css"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  private messageManager: MessageError = new MessageError();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildFormRegister();
    this.addMessages();
  }

  public onSubmit(formGroup: FormGroup) {
    if (!formGroup.invalid) {
    } else {
      formGroup.markAllAsTouched();
    }
  }

  private buildFormRegister() {
    this.registerForm = this.fb.group(
      {
        email: this.fb.control(
          "",
          Validators.compose([Validators.email, Validators.required])
        ),
        username: this.fb.control(
          "",
          Validators.compose([Validators.required])
        ),
        password: this.fb.control(
          "",
          Validators.compose([Validators.required, Validators.minLength(8)])
        ),
        confirm: this.fb.control(
          "",
          Validators.compose([Validators.required, Validators.minLength(8)])
        )
      },
      {
        validators: this.MustMatch("password", "confirm")
      }
    );
  }

  private MustMatch(controlName: string, matchinControlName: string): Function {
    return (formGroup: FormGroup) => {
      const control: AbstractControl = formGroup.controls[controlName];
      const matchingControl: AbstractControl =
        formGroup.controls[matchinControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public getErrorsByControl(controlName: string) {
    const field: AbstractControl = this.registerForm.get(controlName);
    if ((field.touched || field.dirty) && field.errors) {
      return Object.keys(field.errors);
    }
    return [];
  }

  public getMessageError(typeError: string): string {
    return this.messageManager.getMessage(typeError);
  }

  private addMessages() {
    this.messageManager.addMessage(
      "mustMatch",
      "the password confirm is not equal"
    );
    this.messageManager.addMessage(
      "minlength",
      "needed min length 8 characters"
    );
  }

  public hasControlError(control: string): boolean {
    return this.getErrorsByControl(control).length > 0;
  }
}
