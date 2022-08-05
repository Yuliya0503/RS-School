import { garage } from './ApiLinks';
import { ICar } from '../models/interfases';

export default class ApiCar {
    async getCar<T>(id: ICar['id']): Promise<T> {
        const carResponse: Response = await fetch(`${garage}/${id}`, {
            method: 'GET',
        });
        return carResponse.json();
    }

    async createCar<T>(carInformation: ICar['carInformation']): Promise<T> {
        const carCreate: Response = await fetch(garage, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(carInformation),
        });
        return carCreate.json();
    }

    async changeCar<T>(id: ICar['id'], carInformation: ICar['carInformation']): Promise<T> {
        const carChange: Response = await fetch(`${garage}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(carInformation),
        });
        return carChange.json();
    }

    async deleteCar<T>(id: ICar['id']): Promise<T> {
        const carDelete: Response = await fetch(`${garage}/${id}`, {
            method: 'DELETE',
        });
        return carDelete.json();
    }
}
