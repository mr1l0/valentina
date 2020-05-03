import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewUserComponent } from "./view/user/new-user/new-user.component";
import { LoginComponent } from "./view/login/login.component";
import { UserGuard } from "./guards/user.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "new-user", component: NewUserComponent },
  {
    path: "main",
    canActivate: [UserGuard],
    loadChildren: () =>
      import("./view/home/home.module").then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
