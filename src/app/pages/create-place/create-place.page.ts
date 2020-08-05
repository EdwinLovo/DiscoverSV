import { Component, OnInit } from "@angular/core";

import { Plugins, CameraResultType } from "@capacitor/core";
import { DEPARTAMENTS } from "src/app/data/departament.data";
import { TAGS } from "src/app/data/tags.data";
import { Image } from "src/app/models/image.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { Place } from "src/app/models/place.model";
import { Tag } from "src/app/models/tag.model";

const { Camera } = Plugins;

@Component({
  selector: "app-create-place",
  templateUrl: "./create-place.page.html",
  styleUrls: ["./create-place.page.scss"],
})
export class CreatePlacePage implements OnInit {
  imagesQuantity = "0";
  imagesQuantityText = "0";
  selectedTags: Tag[] = [];
  coverUrl: string;
  error: string;
  departaments = DEPARTAMENTS;
  default_tags = TAGS;
  galleryImages: Image[] = [];
  form: FormGroup;

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      departament: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(200)],
      }),
      creatorIG: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
    });
  }

  async takePicture(data) {
    await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
    })
      .then((image) => {
        if (data === "cover") {
          this.coverUrl = image.webPath;
        } else {
          this.galleryImages[data].url = image.webPath;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createGalleryItems(i: number) {
    this.galleryImages = [];
    this.imagesQuantityText = i + "";
    for (let index = 0; index < i; index++) {
      let img = new Image(index, null, null);
      this.galleryImages.push(img);
    }
  }

  deleteGalleryItem(i: number) {
    this.galleryImages = this.galleryImages.filter((img) => img.id != i);
  }

  getImageAuthor(img: Image) {
    this.galleryImages[img.id].authorIG = img.authorIG;
  }

  createPlace() {
    if (!this.form.valid) {
      return;
    }

    this.loadingCtrl
      .create({
        message: "Creating place...",
      })
      .then((loadingEl) => {
        loadingEl.present();

        let place = new Place(
          Math.random().toString(),
          this.form.value.name,
          this.form.value.description,
          this.form.value.departament,
          this.coverUrl,
          this.form.value.creatorIG,
          this.galleryImages,
          this.selectedTags
        );

        console.log(place);

        loadingEl.dismiss();
      });
  }
}
