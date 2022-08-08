import { BaseComponents } from '../Base/BaseComponents';
import { Button } from '../Base/Button';

export class CarControls extends BaseComponents {
    start: Button;

    stop: Button;

    remove: Button;

    select: Button;

    firstLineButtons: BaseComponents;

    secondLineButtons: BaseComponents;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['car-controls']);

        this.firstLineButtons = new BaseComponents(this.HTMLnode, 'div', ['first-line-buttons']);
        this.select = new Button(this.HTMLnode, ['select-car', 'button'], 'select');
        this.remove = new Button(this.HTMLnode, ['remove-car', 'button'], 'remove');
        this.secondLineButtons = new BaseComponents(this.HTMLnode, 'div', ['second-line-buttons']);
        this.start = new Button(this.HTMLnode, ['start-car', 'button'], 'A');
        this.stop = new Button(this.HTMLnode, ['stop-car', 'button'], 'B');
        this.stop.addDisable();
    }
}
