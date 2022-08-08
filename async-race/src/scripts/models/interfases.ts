export interface ApiCars {
    page: number;
    limit: number;
}

export interface ApiWinners {
    page: number;
    limit: number;
    sort: string;
    order: string;
}

export interface ISpeedAndDist {
    velocity: number;
    distance: number;
    name?: string;
}

export interface CarInf {
    name: string;
    color: string;
    id?: number;
}

export interface WinInf {
    id: number;
    wins?: number;
    time: number;
}

export interface IAllCars {
    items: Array<CarInf>;
    count: number;
}

export interface IAllWinners {
    items: Array<WinInf>;
    count: number;
}

export interface IWinAndCar {
    wins?: number;
    time: number;
    car?: CarInf;
    id: number;
}
