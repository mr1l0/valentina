import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserGuard } from "src/app/guards/user.guard";
import { HomeComponent } from "./home.component";
import { NewOrderComponent } from "./order/new-order/new-order.component";
import { MyOrdersComponent } from "./order/my-orders/my-orders.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivateChild: [UserGuard],
    children: [
      { path: "new-request", component: NewOrderComponent },
      { path: "my-requests", component: MyOrdersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
