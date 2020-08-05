import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Place } from "src/app/models/place.model";
import { PopoverComponent } from "src/app/components/popover/popover.component";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  currentPopover = null;
  places: Place[] = [
    new Place(
      "1",
      "El Tunco Beach",
      "A great beach",
      "La Libertad",
      "https://online.salvadoreantours.com/wp-content/uploads/2016/06/WhatsApp-Image-2018-10-17-at-1.56.43-PM.jpeg",
      "@edwinlovo_",
      [],
      []
    ),
    new Place(
      "2",
      "El Zonte Beach",
      "A great beach",
      "La Libertad",
      "https://r-cf.bstatic.com/images/hotel/max500/161/161192128.jpg",
      "@edwinlovo_",
      [],
      []
    ),
    new Place(
      "3",
      "El Palmarcito Beach",
      "A great beach",
      "La Libertad",
      "https://www.internationalsurfproperties.com/wp-content/uploads/2018/09/PHOTO-2018-07-23-08-20-02.jpg",
      "@edwinlovo_",
      [],
      []
    ),
    new Place(
      "1",
      "El Tunco Beach",
      "A great beach",
      "La Libertad",
      "https://online.salvadoreantours.com/wp-content/uploads/2016/06/WhatsApp-Image-2018-10-17-at-1.56.43-PM.jpeg",
      "@edwinlovo_",
      [],
      []
    ),
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    this.currentPopover = popover;
    return await popover.present();
  }
}
