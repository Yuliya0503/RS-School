export interface ApiCars {
    page: number;
    limit: number;
}

export interface ICar {
    id: number;
    carInformation?: { name: string; color: string; id?: number };
    winInformation?: { id: number; wins: number; time: number };
    time?: number;
}

export interface ApiWinners {
    page: number;
    limit: number;
    sort: string;
    order: string;
}
