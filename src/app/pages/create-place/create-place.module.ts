import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreatePlacePageRoutingModule } from "./create-place-routing.module";

import { CreatePlacePage } from "./create-place.page";
import { ImageGalleryItemComponent } from "src/app/components/image-gallery-item/image-gallery-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlacePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreatePlacePage, ImageGalleryItemComponent],
  entryComponents: [ImageGalleryItemComponent],
})
export class CreatePlacePageModule {}
