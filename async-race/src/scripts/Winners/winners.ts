import { IWinAndCar } from "../models/interfases";
import ApiCar from "../api/ApiCar";
import ApiWinner from "../api/ApiWinner";
import ApiEngine from "../api/ApiEngine";
import { BaseComponents } from "../Base/BaseComponents";
import { Pagination } from "../pagination/pagination";
import { WinnersCount } from "./WinnersCount";
import { WinnersPage } from "./WinnersPage";
import { WinnerTable } from "./WinnersTable";
import { Winner } from "./winner";
import { getWinners } from "../api/apiWinners";
import './winners.css';

export class Winners extends BaseComponents {
  apiCar: ApiCar;
  apiWinner: ApiWinner;
  apiEngine: ApiEngine;
  pagination: Pagination;
  showWinsCount: WinnersCount;
  winPage: WinnersPage;
  winsWrapper: BaseComponents;
  winsTable: WinnerTable;
  winner: Winner;

  winnerPage: number;
  order: string;
  sort: string;
  numWins: number;
  countWnners: number;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['winners']);

    this.apiCar = new ApiCar();
    this.apiEngine = new ApiEngine();
    this.apiWinner = new ApiWinner();
    this.pagination = new Pagination(this.HTMLnode);
    this.showWinsCount = new WinnersCount(this.HTMLnode);
    this.winPage = new WinnersPage(this.HTMLnode);
    this.winsWrapper = new BaseComponents(this.HTMLnode);
    this.winsTable = new WinnerTable(this.HTMLnode);
    this.winner = new Winner(this.winsWrapper.HTMLnode);

    this.winnerPage = 1;
    this.order = 'ASC';
    this.sort = 'time';
    this.numWins = 10;
    this.countWnners = 0;

    this.winPage.setNumberPage(this.winnerPage);
    this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);

    this.pagination.next.onClick=()=> {
      this.winPage.HTMLnode.textContent = `Page (${++this.winnerPage})`;
      this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);
    }

    this.pagination.prev.onClick=()=> {
      this.winPage.HTMLnode.textContent = `Page (${--this.winnerPage})`;
      this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);
    }

    this.winsTable.wins.onClick = () => {
      this.sort = 'time';
      if(this.order === 'ASC') {
        this.order = 'DESC';
        this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);
      } else if(this.order === 'DESC') {
        this.order = 'ASC';
        this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);
      }
    }

    this.winsTable.wins.onClick=()=> {
      this.sort = 'wins';
      if(this.order === 'ASC') {
        this.order = 'DESC';
        this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);
      } else if(this.order === 'DESC') {
        this.order = 'ASC';
        this.getPageWinners(this.winnerPage, this.numWins, this.sort, this.order);
      }
    }
  }

  renderCars(data:IWinAndCar[]): void {
    this.winsWrapper.HTMLnode.innerHTML = '';
    let count = 1;
    data.forEach((win) => {
      this.winner = new Winner(this.winsWrapper.HTMLnode);
      this.winner.renderWinner(count++, win.car.color, win.car.name, win.wins, win.time);
    })
  }

  async getPageWinners(page: number, limit: number, sort: string, order: string): Promise<void> {
    const dataWins = await getWinners(page, limit, sort, order);
    this.renderCars(dataWins.items);
    this.countWnners = dataWins.count;
    this.pagination.checkPuginationButtons(this.numWins, this.countWnners, this.winnerPage);
    this.showWinsCount.HTMLnode.textContent = `Winners (${this.countWnners})`;
  }
}
