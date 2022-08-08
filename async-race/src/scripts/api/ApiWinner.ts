import { winners } from './ApiLinks';
import { WinInf, IAllWinners, IWinAndCar } from '../models/interfases';
import ApiCar from './ApiCar';

export default class ApiWinner {

  async getWinners(page: number, limit = 10, sort: string, order: string): Promise<IAllWinners> {
    let sortWin;
    if (sort && order) {
        sortWin = `$_sort=${sort}&_order=${order}`;
    } else {
        sortWin = '';
    }
    const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${sortWin}`);
    const items: Array<IWinAndCar> = await response.json();
    const getCar = new ApiCar();


    return {
      items: await Promise.all(items.map(async(winner)=> ({...winner, car: await getCar.getCar(winner.id) }))),
      count: Number(response.headers.get('X-Total-Count'))
    };
}

    async getWinner(id: number): Promise<WinInf> {
        const winnerGet = await fetch(`${winners}/${id}`, {
            method: 'GET',
        });
        return await winnerGet.json();
    }

    async createWinner(winInformation: WinInf): Promise<WinInf> {
        const winCreate: Response = await fetch(winners, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(winInformation),
        });
        return await winCreate.json();
    }

    async changeWinner(id: number, winInformation: WinInf): Promise< WinInf> {
        const winChange: Response = await fetch(`${winners}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(winInformation),
        });
        return await winChange.json();
    }

    async deleteWinner(id: number): Promise<JSON> {
        const winDelete: Response = await fetch(`${winners}/${id}`, {
            method: 'DELETE',
        });
        return await winDelete.json();
    }

    async getStatusWinner(id: number): Promise<number> {
        const statusWinner: Response = await fetch(`${winners}/${id}`, {
            method: 'GET',
        });
        return statusWinner.status;
    }

}
