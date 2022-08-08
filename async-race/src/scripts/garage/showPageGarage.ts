import { BaseComponents } from "../Base/BaseComponents";

export class ShowPageGarage extends BaseComponents {
  carsAll: BaseComponents;
  numberPage: BaseComponents;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['pages-control']);

    this.carsAll = new BaseComponents(this.HTMLnode, 'div', ['all-cars']);
    this.numberPage = new BaseComponents(this.HTMLnode, 'div', ['number-page'], `Page (1)`)
  }

}
