import { BaseComponents } from "../Base/BaseComponents";
import { Button } from "../Base/Button";
import { Inputs } from "../Base/Inputs";
import ApiCar from "../api/ApiCar";
import ApiEngine from "../api/ApiEngine";
import ApiWinner from "../api/ApiWinner";

export class CreateInputsCar extends BaseComponents {
  colorCar: Inputs;
  nameCar: Inputs;
  createCarBtn: Button;
  apiWinner: ApiWinner;
  apiCar: ApiCar;
  apiEngine: ApiEngine;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['car-create']);

    this.apiCar = new ApiCar();
    this.apiEngine = new ApiEngine();
    this.apiWinner = new ApiWinner();

    this.nameCar = new Inputs(this.HTMLnode, ['car-create-input', 'input'], 'text', 'car name');
    this.colorCar = new Inputs(this.HTMLnode, ['car-color-input', 'input'], 'color', '');
    this.createCarBtn = new Button(this.HTMLnode, ['car-color-btn', 'button'], 'create');

  }

  clearColor(): void {
    this.colorCar.input.value = '#000000';
  }

  clearName(): void {
    this.nameCar.input.value = '';
  }
}
