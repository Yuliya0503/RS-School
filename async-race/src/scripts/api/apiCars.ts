import { garage } from './ApiLinks';
import { ApiCars } from '../models/interfases';

export async function getCars<T>(page: ApiCars['page']): Promise<{
    cars: Promise<T>;
    count: string;
}> {
    const limit: ApiCars['limit'] = 7;
    const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

    return {
        cars: response.json(),
        count: response.headers.get('X-Total-Count'),
    };
}
