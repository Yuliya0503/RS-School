import ApiCar from "../api/ApiCar";
import ApiEngine from "../api/ApiEngine";
import ApiWinner from "../api/ApiWinner";
import { Car } from "../Car/Car";
import { WinnerMessage }from "./WinnerMEssage"
import { RandomCars } from "./randomCar";
import { Pagination } from "../pagination/pagination";
import { GarageControlls } from "./controlsGarage";
import { containerGarage } from "./containerGarage";
import { ShowPageGarage } from "./showPageGarage";
import { ISpeedAndDist, CarInf } from "../models/interfases";
import { BaseComponents } from "../Base/BaseComponents";
import { getCars } from "../api/apiCars";
import './garage.scss';

export class Garage extends BaseComponents {
  apiCar: ApiCar;
  apiEngine: ApiEngine;
  apiWinner: ApiWinner;
  car: Car;
  winnerMessage: WinnerMessage;
  randomCars: RandomCars;
  pagination: Pagination;
  garageControlls: GarageControlls;
  containerGarage: containerGarage;
  showPageGarage: ShowPageGarage;

  page: number;
  numOfCars: number;
  arrCars: Car[];
  carsInGarage: number;

  constructor(parentNode: HTMLElement){
    super(parentNode, 'main', ['main-garage']);

    this.page = 1;
    this.numOfCars = 7;
    this.carsInGarage = 0;

    this.garageControlls = new GarageControlls(this.HTMLnode);
    this.containerGarage = new containerGarage(this.HTMLnode);
    this.showPageGarage = new ShowPageGarage(this.garageControlls.HTMLnode);
    this.pagination = new Pagination(this.HTMLnode);
    this.randomCars = new RandomCars();
    this.winnerMessage = new WinnerMessage(this.HTMLnode);
    this.winnerMessage.hideElement();
    this.apiCar = new ApiCar();
    this.apiEngine = new ApiEngine();
    this.apiWinner = new ApiWinner();

    this.winnerMessage.onWinnerMessage=()=>{
      this.winnerMessage.hideElement();
    }

    this.garageControlls.onCreatenewCar=async():Promise<void>=>{
      const params: CarInf={
        name: this.garageControlls.getNameCar(),
        color: this.garageControlls.getColorValue(),
      };
      await this.apiCar.createCar(params);
      this.garageControlls.createCar.clearName();
      this.garageControlls.createCar.clearColor();
      this.getCurrentPage(this.page);
    }

    this.garageControlls.onCreateCars = async (): Promise<void> => {
      for (let i = 0; i < 100; i += 1) {
        const params: CarInf ={
          color: this.randomCars.createRandomColor(),
          name: this.randomCars.createRandomName(),
        };
        this.apiCar.createCar(params);
      }
      this.getCurrentPage(this.page);
    }

    this.garageControlls.controlRace.onResetRase=async()=>{
      this.arrCars.forEach(async (item): Promise<void>=>{
        item.image.carImage.HTMLnode.classList.remove('animate');
        item.image.carImage.HTMLnode.classList.remove('paused');
        await this.apiEngine.engineStop(item.details.id);
      })
    }

    this.garageControlls.controlRace.onStartCars=async()=>{
      await this.startCars();
    }

    this.pagination.prev.onClick=async()=>{
      this.showPageGarage.numberPage.HTMLnode.textContent = `Page (${--this.page})`;
      this.getCurrentPage(this.page);
    }

    this.pagination.next.onClick=async()=>{
      this.showPageGarage.numberPage.HTMLnode.textContent = `Page (${++this.page})`;
      this.getCurrentPage(this.page);
    }
  }

  async startCars(): Promise<void> {
    const arrayFunctionRace: Array<Promise<ISpeedAndDist>> = [];
    this.arrCars.forEach(async(car)=>{
      arrayFunctionRace.push(car.startCar(car.details.id, car.details.name));
    })
    const time = (await Promise.all(arrayFunctionRace)).map((item)=>
      item.velocity && item.distance ? item.distance / item.velocity / 1000 : 0
    );
    const timeSorted = time.filter((item)=> item !== 0).sort((a, b) => a - b);
    const name = (await Promise.all(arrayFunctionRace))
      .filter((item)=> item.distance / item.velocity / 1000 === timeSorted[0])
      .map((item)=> item.name);
    const winId = this.arrCars.filter((item)=> item.details.name === name[0]).map((item)=>item.details.id)[0];
    const bestTime = Number(timeSorted[0].toString().slice(0, 4));
    this.winnerMessage.showwinnerMessage(name[0], bestTime);
    this.checkWinner(winId, bestTime);
  }

  async checkWinner(id: number, time: number): Promise<void> {
    const status = await this.apiWinner.getStatusWinner(id);
    if(status === 404){
      await this.apiWinner.createWinner({
        id,
        wins: 1,
        time,
      });
    } else {
      const winner = await this.apiWinner.getWinner(id);
      await this.apiWinner.changeWinner(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      })
    }
  }

  deleteCar(id:number):void {
    this.car.carControls.remove.onClick=async()=>{
      await this.apiCar.deleteCar(id);
      await this.apiWinner.deleteWinner(id);
      this.getCurrentPage(this.page);
    }
  }

  changeCar(params: CarInf):void {
    this.car.carControls.select.onClick=()=>{
      this.garageControlls.setChangeOptions(params.name, params.color);
      this.garageControlls.onChangeCar=async()=>{
        params.name = this.garageControlls.getChangeNameCar();
        params.color = this.garageControlls.getChangeColorValue();
        await this.apiCar.changeCar(params.id, params);
        this.garageControlls.disabledElements();
        this.getCurrentPage(this.page);
      }
    }
  }

  renderCars(data:CarInf[]):void{
    this.containerGarage.HTMLnode.innerHTML = '';
    this.arrCars = [];
    data.forEach((car)=>{
      this.car = new Car(this.containerGarage.HTMLnode, car);
      this.car.renderCar(car.color, car.name);
      this.changeCar(car);
      this.deleteCar(car.id);
      this.arrCars.push(this.car);
    })
  }

  async getCurrentPage(numberPage: number): Promise<void> {
    const data = await getCars(numberPage);
    this.renderCars(data.items);
    this.carsInGarage = data.count;
    this.pagination.checkPuginationButtons(this.numOfCars, this.carsInGarage, this.page);
    this.showPageGarage.carsAll.HTMLnode.textContent = `Garage (${this.carsInGarage})`;
  }
}
