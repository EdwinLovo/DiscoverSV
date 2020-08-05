import { Component, OnInit, Input } from "@angular/core";
import { Place } from "src/app/models/place.model";

@Component({
  selector: "app-discover-card",
  templateUrl: "./discover-card.component.html",
  styleUrls: ["./discover-card.component.scss"],
})
export class DiscoverCardComponent implements OnInit {
  @Input() place: Place;

  constructor() {}

  ngOnInit() {}
}
