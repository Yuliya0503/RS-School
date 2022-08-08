import { BaseComponents } from "../Base/BaseComponents";
import { Button } from "../Base/Button";

export class ControlRace extends BaseComponents {
  race: Button;
  reset: Button;

  onStartCars: () => void;
  onResetRase: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['control-race']);
    this.race = new Button(this.HTMLnode, ['race-button'], 'race');
    this.reset = new Button(this.HTMLnode, ['reset-button'], 'reset');
    this.race.onClick = async () => {
      this.onStartCars();
    };
    this.reset.onClick = async () => {
      this.onResetRase();
    }
  }

}
