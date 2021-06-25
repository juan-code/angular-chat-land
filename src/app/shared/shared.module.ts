import { NgModule } from "@angular/core";
import { AccountUserComponent } from "./account-user/account-user.component";

@NgModule({
  declarations: [AccountUserComponent],
  exports: [AccountUserComponent]
})
export class SharedModule {}
