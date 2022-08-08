import ApiCar from '../api/ApiCar';
import ApiEngine from '../api/ApiEngine';
import ApiWinner from '../api/ApiWinner';
import { BaseComponents } from '../Base/BaseComponents';
import { ControlRace } from './conrilRace';
import { CreateInputsCar } from './createInputsCar';
import { CreateBtnCars } from './createBtnCars';
import { ChangeCarInput } from './changeCarInput';

export class GarageControlls extends BaseComponents {
    createCar: CreateInputsCar;

    changeCar: ChangeCarInput;

    controlRace: ControlRace;

    createCars: CreateBtnCars;

    apiCar: ApiCar;

    apiWinner: ApiWinner;

    apiEngine: ApiEngine;

    onCreateCars: () => void;

    onChangeCar: () => void;

    onCreatenewCar: () => void;

    constructor(parentNode: HTMLElement) {
        super(parentNode, 'div', ['controls']);

        this.apiCar = new ApiCar();
        this.apiEngine = new ApiEngine();
        this.apiWinner = new ApiWinner();
        this.createCar = new CreateInputsCar(this.HTMLnode);
        this.changeCar = new ChangeCarInput(this.HTMLnode);
        this.controlRace = new ControlRace(this.HTMLnode);
        this.createCars = new CreateBtnCars(this.HTMLnode);
        this.createCar.createCarBtn.onClick = async () => {
            this.onCreatenewCar();
        };
        this.changeCar.changeCarBtn.onClick = async () => {
            this.onChangeCar();
        };
        this.createCars.createCars.onClick = async () => {
            this.onCreateCars();
        };
    }

    getColorValue(): string {
        return this.createCar.colorCar.getValue();
    }

    getNameCar(): string {
        return this.createCar.nameCar.getValue();
    }

    getChangeColorValue(): string {
        return this.changeCar.colorCarChange.getValue();
    }

    getChangeNameCar(): string {
        return this.changeCar.nameCarChange.getValue();
    }

    setChangeOptions(name: string, color: string): void {
        this.changeCar.nameCarChange.input.value = name;
        this.changeCar.colorCarChange.input.value = color;
        this.changeCar.nameCarChange.showElementActive();
        this.changeCar.changeCarBtn.removeDisable();
    }

    disabledElements(): void {
        this.changeCar.nameCarChange.input.value = '';
        this.changeCar.colorCarChange.input.value = '#000000';
        this.changeCar.nameCarChange.hideElementActive('true');
        this.changeCar.changeCarBtn.addDisable();
    }
}
