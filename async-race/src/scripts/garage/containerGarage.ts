import { BaseComponents } from '../Base/BaseComponents';
import { Car } from '../Car/Car';

export class ContainerGarage extends BaseComponents {
    car: Car;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['container-garage']);
    }
}
