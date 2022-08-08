import { ImageCar } from "./ImageCar";
import { BaseComponents } from "../Base/BaseComponents";

export class ImageRender extends BaseComponents {
  carImage: BaseComponents;
  carName: BaseComponents;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['car-image']);

    this.carName = new BaseComponents(this.HTMLnode, 'span', ['car-name']);
    this.carImage = new BaseComponents(this.HTMLnode, 'div', ['car-image-wrapper']);
  }

  renderCarName(name: string): void {
    this.carName.HTMLnode.textContent = name;
  }

  renderCarImage(color: string): void {
    this.carImage.HTMLnode.innerHTML = ImageCar(color);
  }
}
