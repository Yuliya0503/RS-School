import { Button } from '../Base/Button';
import { BaseComponents } from '../Base/BaseComponents';

export class WinnerMessage extends BaseComponents {
    winnerText: BaseComponents;

    messBtn: Button;

    winInfo: BaseComponents;

    onWinnerMessage: () => void;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['winner-message']);
        this.winInfo = new BaseComponents(this.HTMLnode, 'div', ['winner-info']);
        this.winnerText = new BaseComponents(this.winInfo.HTMLnode, 'div', ['winner-text']);
        this.messBtn = new Button(this.winInfo.HTMLnode, ['message-btn'], 'ok');
        this.messBtn.onClick = () => {
            this.onWinnerMessage();
        };
    }

    showwinnerMessage(name: string, time: number): void {
        this.showElement();
        this.winnerText.HTMLnode.textContent = `Won ${name}, time ${time} sec!`;
    }
}
