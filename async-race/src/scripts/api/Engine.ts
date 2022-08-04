import { engine } from './ApiLinks';
import { ICar } from '../models/interfases';

export default class Engine {
    async engineStart<T>(id: ICar['id']): Promise<T> {
        const engStart: Response = await fetch(`${engine}?id=${id}&status=started`, {
            method: 'PATCH',
        });
        return engStart.json();
    }

    async engineStop<T>(id: ICar['id']): Promise<T> {
        const engStop: Response = await fetch(`${engine}?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        return engStop.json();
    }

    async engineToDrive(id: ICar['id']): Promise<Response | boolean> {
        const drive: Response = await fetch(`${engine}?id=${id}&status=drive`, {
            method: 'PATCH',
        }).catch();
        if (drive.status === 200) {
            return { ...(await drive.json()) };
        }
        return { success: false } as unknown as boolean;
    }
}
