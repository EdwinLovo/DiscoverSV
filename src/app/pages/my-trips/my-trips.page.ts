import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-trips",
  templateUrl: "./my-trips.page.html",
  styleUrls: ["./my-trips.page.scss"],
})
export class MyTripsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  openCreatePlace() {
    this.router.navigateByUrl("/tabs/my-trips/create-place");
  }
}
