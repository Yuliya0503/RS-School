import { winners } from './ApiLinks';
import { ApiWinners } from '../models/interfases';

export async function getWinners(page: ApiWinners['page'], sort?: ApiWinners['sort'], order?: ApiWinners['order']) {
    const limit: ApiWinners['limit'] = 10;
    let sortWin;
    if (sort && order) {
        sortWin = `$_sort=${sort}&_order=${order}`;
    } else {
        sortWin = '';
    }
    const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${sortWin}`);
    return {
        wins: response.json(), //--------------------------------------??????
        count: response.headers.get('X-Total-Count'),
    };
}
