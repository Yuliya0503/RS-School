import { BaseComponents } from "../Base/BaseComponents";
import { Button } from "../Base/Button";
import { Inputs } from "../Base/Inputs";


export class ChangeCarInput extends BaseComponents {
  nameCarChange: Inputs;
  colorCarChange: Inputs;
  changeCarBtn: Button;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['change-car']);
    this.nameCarChange = new Inputs(this.HTMLnode, ['change-car-input', 'input'], 'text', 'new car');
    this.nameCarChange.hideElementActive('true');

    this.colorCarChange = new Inputs(this.HTMLnode, ['color-input', 'input'], 'color', '');
    this.changeCarBtn = new Button(this.HTMLnode, ['color-btn', 'button'], 'update');
    this.changeCarBtn.addDisable();
  }
}
