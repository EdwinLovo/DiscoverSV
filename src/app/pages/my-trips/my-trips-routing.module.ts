import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyTripsPage } from "./my-trips.page";

const routes: Routes = [
  {
    path: "",
    component: MyTripsPage,
  },
  {
    path: "create-place",
    loadChildren: () =>
      import("../create-place/create-place.module").then(
        (m) => m.CreatePlacePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTripsPageRoutingModule {}
