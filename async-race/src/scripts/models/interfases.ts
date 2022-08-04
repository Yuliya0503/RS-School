export interface ApiCars {
    page: number;
    limit: number;
}

export interface ICar {
    id: number;
    carInformation?: string;
    winInformation?: string;
}

export interface ApiWinners {
    page: number;
    limit: number;
    sort: string;
    order: string;
}
