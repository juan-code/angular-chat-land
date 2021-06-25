import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowseRoutingModule } from "./browse-routing.module";
import { IconModule } from "../icons/icon.module";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [...BrowseRoutingModule.components, SideMenuComponent],
  imports: [CommonModule, BrowseRoutingModule, IconModule, SharedModule]
})
export class BrowseModule {}
