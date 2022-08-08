import { BaseComponents } from '../Base/BaseComponents';

export class WinnersCount extends BaseComponents {
    constructor(parentNode: HTMLElement) {
        super(parentNode, 'span', ['wins-count']);
    }
}
