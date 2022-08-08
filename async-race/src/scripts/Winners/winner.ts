import { ImageCarMin } from "./ImageCarMin";
import { BaseComponents } from "../Base/BaseComponents";

export class Winner extends BaseComponents {
  number: BaseComponents;
  car: BaseComponents;
  name: BaseComponents;
  wins: BaseComponents;
  time: BaseComponents;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['winner']);

    this.number = new BaseComponents(this.HTMLnode, 'div', ['winner-number']);
    this.car = new BaseComponents(this.HTMLnode, 'div', ['winner-car']);
    this.name = new BaseComponents(this.HTMLnode, 'div', ['winner-name'], 'name');
    this.wins = new BaseComponents(this.HTMLnode, 'div', ['winner-wins']);
    this.time = new BaseComponents(this.HTMLnode, 'div', ['winner-time']);
  }

  renderImg(color: string): void {
    this.car.HTMLnode.innerHTML = ImageCarMin(color);
  }

  renderWinner(num: number, color: string, name: string, wins: number, time: number): void {
    this.number.HTMLnode.textContent = `${num}`;
    this.renderImg(color);
    this.name.HTMLnode.textContent = name;
    this.wins.HTMLnode.textContent = `${wins}`;
    this.time.HTMLnode.textContent = `${time}`;
  }
}
