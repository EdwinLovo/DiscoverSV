import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Image } from "src/app/models/image.model";

@Component({
  selector: "app-image-gallery-item",
  templateUrl: "./image-gallery-item.component.html",
  styleUrls: ["./image-gallery-item.component.scss"],
})
export class ImageGalleryItemComponent implements OnInit {
  @Output("takePicture") takePicture = new EventEmitter<number>();
  @Output("deleteGalleryItem") delete = new EventEmitter<number>();
  @Output("getImageAuthor") imgAuthor = new EventEmitter<Image>();
  @Input() img: Image;
  user: string;

  constructor() {}

  ngOnInit() {}

  imgClick() {
    let pos = this.img.id;
    this.takePicture.emit(pos);
  }

  deleteClick() {
    let pos = this.img.id;
    this.delete.emit(pos);
  }

  handleInput(user: string) {
    this.img.authorIG = user;
    this.imgAuthor.emit(this.img);
  }
}
