import { garage } from './ApiLinks';
import { IAllCars } from '../models/interfases';

export async function getCars(page: number, limit = 7): Promise<IAllCars> {
    const res = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
    return {
        items: await res.json(),
        count: Number(res.headers.get('X-Total-Count')),
    };
}
