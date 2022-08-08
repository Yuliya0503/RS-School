import { BaseComponents } from "../Base/BaseComponents";
import './switchPages.scss'

export class SwitchPage extends BaseComponents {
  toGarage: BaseComponents;
  toWinners: BaseComponents;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', ['navigation']);

    this.toGarage = new BaseComponents(this.HTMLnode, 'a', ['header-buttons', 'button'], 'garage');
    this.toWinners = new BaseComponents(this.HTMLnode, 'a', ['header-buttons', 'button'], 'winners');
    this.toGarage.addAttribute('href', '#garage');
    this.toWinners.addAttribute('href', '#winners');
  }
}
