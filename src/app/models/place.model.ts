import { Image } from "./image.model";
import { Coords } from "./coords.model";
import { Tag } from "./tag.model";

export class Place {
  constructor(
    public id: string,
    public name: string,
    public desc: string,
    public departament: string,
    public cover: string,
    public creatorIG: string,
    public images: Image[],
    public tags: Tag[] // public coords: Coords
  ) {}
}
