import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowseComponent } from "./browse.component";

const routes: Routes = [
  {
    path: "",
    component: BrowseComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/browse/room"
      },
      {
        path: "room",
        loadChildren: () => import("./room/room.module").then(m => m.RoomModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule {
  static components: any[] = [BrowseComponent];
}
