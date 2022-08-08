import { Garage } from '../garage/Garage';
import { Winners } from '../Winners/winners';
import { Switch } from '../Base/Switch';
import { SwitchPage } from '../switchPage/switchPages';
import ApiCar from '../api/ApiCar';
import ApiEngine from '../api/ApiEngine';
import ApiWinner from '../api/ApiWinner';

export class App {
    switchPage: SwitchPage;

    garage: Garage;

    winners: Winners;

    switches: Switch;

    apiCar: ApiCar;

    apiEngine: ApiEngine;

    apiWnner: ApiWinner;

    constructor(readonly rootElement: HTMLElement) {
        this.switchPage = new SwitchPage(this.rootElement);
        this.garage = new Garage(this.rootElement);
        this.winners = new Winners(this.rootElement);
        this.switches = new Switch(this.garage, this.winners);
        this.winners.hideElement();
        this.switches.addPage();
        this.switchPage.toWinners.HTMLnode.onclick = () => {
            this.winners.getPageWinners(this.winners.winnerPage, this.winners.numWins, this.winners.sort, this.winners.order);
        };
    }
}
