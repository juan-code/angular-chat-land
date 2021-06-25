import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routesRoot: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/signin"
  },
  {
    path: "",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "browse",
    loadChildren: () =>
      import("./browse/browse.module").then(m => m.BrowseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule]
})
export class AppRouting {}
