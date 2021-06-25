import { NgModule } from "@angular/core";
import { ColumnChatComponent } from "./column-chat/column-chat.component";
import { RoomRoutingModule } from "./room-routing.module";
import { ListFriendsComponent } from "./list-friends/list-friends.component";

//icons
import { IconModule } from "../../icons/icon.module";
import { FriendComponent } from "./friend/friend.component";
import { RecentChatsComponent } from "./recent-chats/recent-chats.component";
import { ChatItemComponent } from "./chat-item/chat-item.component";
import { ImageUserComponent } from "./img-user/img-user.component";

import { BadgeComponent } from "./badge/badge.component";
import { HeadChatComponent } from "./head-chat/head-chat.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    ...RoomRoutingModule.components,
    ColumnChatComponent,
    ListFriendsComponent,
    FriendComponent,
    RecentChatsComponent,
    ChatItemComponent,
    ImageUserComponent,
    BadgeComponent,
    HeadChatComponent
  ],
  imports: [RoomRoutingModule, IconModule, SharedModule]
})
export class RoomModule {}
