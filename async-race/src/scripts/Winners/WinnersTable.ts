import { BaseComponents } from '../Base/BaseComponents';
import { Button } from '../Base/Button';

export class WinnerTable extends BaseComponents {
    numberWinner: BaseComponents;

    carWinner: BaseComponents;

    nameWinner: Button;

    wins: Button;

    bestTime: Button;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['table-winners']);

        this.numberWinner = new BaseComponents(this.HTMLnode, 'span', ['win-number'], '№');
        this.carWinner = new BaseComponents(this.HTMLnode, 'span', ['win-car'], 'car');
        this.nameWinner = new Button(this.HTMLnode, ['win-name'], 'name');
        this.wins = new Button(this.HTMLnode, ['wins'], 'wins');
        this.bestTime = new Button(this.HTMLnode, ['best-time'], 'Best time(s)');
    }
}
