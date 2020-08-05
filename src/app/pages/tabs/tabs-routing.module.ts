import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "discover",
        loadChildren: () =>
          import("../discover/discover.module").then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: "favorites",
        loadChildren: () =>
          import("../favorites/favorites.module").then(
            (m) => m.FavoritesPageModule
          ),
      },
      {
        path: "my-trips",
        loadChildren: () =>
          import("../my-trips/my-trips.module").then(
            (m) => m.MyTripsPageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../profile/profile.module").then((m) => m.ProfilePageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/discover",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/discover",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
