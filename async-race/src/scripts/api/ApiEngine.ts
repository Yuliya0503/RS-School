import { engine } from './ApiLinks';

export default class ApiEngine {
    async engineStart(id: number): Promise<{ velocity: number; distance: number }> {
        const engStart: Response = await fetch(`${engine}?id=${id}&status=started`, {
            method: 'PATCH',
        });
        const start: Promise<{ velocity: number; distance: number }> = await engStart.json();
        return start;
    }

    async engineStop(id: number): Promise<{ velocity: number; distance: number }> {
        const engStop: Response = await fetch(`${engine}?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        const stop: Promise<{ velocity: number; distance: number }> = await engStop.json();
        return stop;
    }

    async engineToDrive(id: number): Promise<number> {
        const drive: Response = await fetch(`${engine}?id=${id}&status=drive`, {
            method: 'PATCH',
        }).catch();
        return drive.status;
    }
}
