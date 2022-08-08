import { BaseComponents } from "../Base/BaseComponents";
import { Button } from "../Base/Button";

export class CreateBtnCars extends BaseComponents {
  createCars: Button;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['create-cars']);
    this.createCars = new Button(this.HTMLnode, ['create-cars-btn', 'button'], 'create cars');
  }
}
