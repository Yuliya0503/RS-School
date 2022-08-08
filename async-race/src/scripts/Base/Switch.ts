import { Garage } from "../garage/Garage";
import { Winners } from "../Winners/winners";

export class Switch {
  garage: Garage;
  winners: Winners;
  hash: string;

  constructor(garage: Garage, winners: Winners) {
    this.garage = garage;
    this.hash = '';
    this.winners = winners;
    window.onpopstate = () => this.addPage();
  }

  addPage():void {
    this.hash = window.location.hash.slice(1);
    if(this.hash === 'garage' || '') {
      this.garage.showElement();
      this.winners.hideElement();
    } else if(this.hash === 'winners') {
      this.garage.hideElement();
      this.winners.showElement();
    }
  }
}
