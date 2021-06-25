import { NgModule } from "@angular/core";
import { UserCircleComponent } from "./user-circle/user-circle.component";
import { LockComponent } from "./lock/lock.component";
import { ChatLandComponent } from "./chat-land/chat-land.component";
import { AccountComponent } from "./account/account.component";
import { MessageComponent } from "./message/message.component";
import { ExitComponent } from "./exit/exit.component";
import { SearchIconComponent } from "./search/search.component";

@NgModule({
  declarations: [
    UserCircleComponent,
    LockComponent,
    ChatLandComponent,
    AccountComponent,
    MessageComponent,
    ExitComponent,
    SearchIconComponent
  ],
  exports: [
    UserCircleComponent,
    LockComponent,
    ChatLandComponent,
    AccountComponent,
    MessageComponent,
    ExitComponent,
    SearchIconComponent
  ]
})
export class IconModule {}
