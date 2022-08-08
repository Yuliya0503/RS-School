import { BaseComponents } from '../Base/BaseComponents';

export class WinnersPage extends BaseComponents {
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'span', ['wins-page']);
    }

    setNumberPage(number: number): void {
        this.HTMLnode.textContent = `Page (${number})`;
    }
}
