import ApiCar from "../api/ApiCar";
import { CarInf,ISpeedAndDist } from "../models/interfases";
import { BaseComponents } from "../Base/BaseComponents";
import { CarControls } from "../Car/ControlsForCar";
import { ImageRender } from "../Car/ImageRender";
import ApiEngine from "../api/ApiEngine";
import './car.scss';

export class Car extends BaseComponents {
  image: ImageRender;
  carControls: CarControls;
  details: CarInf;
  apiCar: ApiCar;
  apiEngine: ApiEngine;

  constructor(parentNode:HTMLElement, details: CarInf) {
    super(parentNode, 'div', ['car']);

    this.details = details;
    this.apiCar = new ApiCar();
    this.apiEngine = new ApiEngine();
    this.carControls = new CarControls(this.HTMLnode);
    this.image = new ImageRender(this.HTMLnode);
    this.carControls.start.onClick = async () => {
      this.carControls.start.addDisable();
      this.carControls.stop.removeDisable();
      await this.startCar(this.details.id, this.details.name);
    };

    this.carControls.stop.onClick = async () => {
      this.carControls.start.removeDisable();
      this.image.carImage.HTMLnode.classList.remove('animate');
      this.image.carImage.HTMLnode.style.left = '7%';
      await this.apiEngine.engineStop(this.details.id);
    };
  };

  async startCar(id: number, name: string): Promise<ISpeedAndDist> {
    const resultStart: ISpeedAndDist = await this.apiEngine.engineStart(id);
    const time: number = resultStart.distance / resultStart.velocity / 1000;
    await this.animateCar(time);
    const status = await this.apiEngine.engineToDrive(id);
    const defValue :ISpeedAndDist = {
      velocity: 0,
      distance: 0,
      name,
    }
    if (status === 500) {
      this.image.carImage.HTMLnode.classList.add('paused');
      this.carControls.stop.removeDisable();
      return defValue;
    }
    return {...resultStart, name};
  };

  async animateCar(time: number): Promise<void> {
    this.image.carImage.HTMLnode.classList.add('animate');
    this.image.carImage.HTMLnode.style.animationDuration = `${time}s`;

  }

  changeCar(color: string, name: string): void {
    this.image.renderCarImage(color);
    this.image.renderCarName(name);
  }

  renderCar(color: string, name: string): void {
    this.image.renderCarImage(color);
    this.image.renderCarName(name);
  }
}

