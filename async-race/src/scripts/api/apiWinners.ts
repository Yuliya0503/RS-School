import { winners } from './ApiLinks';
import { ApiWinners } from '../models/interfases';

export async function getWinners(page: ApiWinners['page'], sort: ApiWinners['sort'], order: ApiWinners['order']) {
    const limit: ApiWinners['limit'] = 10;
    // const response = await fetch(`${winners}?_page=${page}&_limit=${limit}$`)
}
