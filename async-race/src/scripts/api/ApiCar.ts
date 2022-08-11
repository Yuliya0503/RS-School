import { garage } from './ApiLinks';
import { CarInf, IAllCars } from '../models/interfases';

export default class ApiCar {
    async getCars(page: number, limit = 7): Promise<IAllCars> {
        const res: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
        return {
            items: await res.json(),
            count: Number(res.headers.get('X-Total-Count')),
        };
    }

    async getCar(id: number): Promise<CarInf> {
        const carResponse: Response = await fetch(`${garage}/${id}`, {
            method: 'GET',
        });
        return carResponse.json();
    }

    async createCar(carInformation: CarInf): Promise<JSON> {
        const carCreate: Response = await fetch(garage, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(carInformation),
        });
        return carCreate.json();
    }

    async changeCar(id: number, carInformation: CarInf): Promise<JSON> {
        const carChange: Response = await fetch(`${garage}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(carInformation),
        });
        const car: Promise<JSON> = await carChange.json();
        return car;
    }

    async deleteCar(id: number): Promise<JSON> {
        const carDelete: Response = await fetch(`${garage}/${id}`, {
            method: 'DELETE',
        });
        const car: Promise<JSON> = await carDelete.json();
        return car;
    }
}
