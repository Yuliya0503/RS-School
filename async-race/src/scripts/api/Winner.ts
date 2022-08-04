import { winners } from './ApiLinks';
import { ICar } from '../models/interfases';

export default class Winner {
    async getWinner<T>(id: ICar['id']): Promise<T> {
        const winnerGet = await fetch(`${winners}/${id}`, {
            method: 'GET',
        });
        return winnerGet.json();
    }

    async createWinner<T>(winInformation: ICar['winInformation']): Promise<T> {
        const winCreate: Response = await fetch(winners, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(winInformation),
        });
        return winCreate.json();
    }

    async changeWinner<T>(id: ICar['id'], winInformation: ICar['winInformation']): Promise<T> {
        const winChange: Response = await fetch(`${winners}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(winInformation),
        });
        return winChange.json();
    }

    async deleteWinner<T>(id: ICar['id']): Promise<T> {
        const winDelete: Response = await fetch(`${winners}/${id}`, {
            method: 'DELETE',
        });
        return winDelete.json();
    }

    async getStatusWinner(id:ICar['id']): Promise<number> {
      const statusWinner: Response = await fetch(`${winners}/${id}`, {
        method: 'GET',
      });
      return statusWinner.status;
    }

}

