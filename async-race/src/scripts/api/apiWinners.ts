import { winners } from './ApiLinks';
import { IAllWinners, IWinAndCar } from '../models/interfases';
import ApiCar from './ApiCar';

export async function getWinners(page: number, sort: string, order: string, limit = 10): Promise<IAllWinners> {
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
        items: await Promise.all(items.map(async (winner) => ({ ...winner, car: await getCar.getCar(winner.id) }))),
        count: Number(response.headers.get('X-Total-Count')),
    };
}
