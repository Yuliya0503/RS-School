export class RandomCars {
    color: string;

    cars: string[] = [
        'Mitsubishi',
        'Lexus',
        'Mazda',
        'Nissan',
        'Scion',
        'Subaru',
        'Suzuki',
        'Toyota',
        'Buick',
        'Cadillac',
        'Chevrolet',
        'Chrysler',
        'Dodge',
        'Ford',
        'Jeep',
        'Lincoln',
        'Mercury',
        'Oldsmobile',
        'Pontiac',
        'Tesla',
        'Aurus',
        'Lada',
        'Audi',
        'BMW',
        'Mercedes-Benz',
        'Opel',
        'Porsche',
        'Volkswagen',
    ];

    models: string[] = [
        'Damas',
        'Espero',
        'Gentra',
        'Lanos',
        'Matiz',
        'Magnus',
        'Nexia',
        'C-MAX',
        'Contour',
        'EcoSport',
        'Ecoline',
        'Escape',
        'Explorer',
        'Galaxy',
        'Kuga',
        'Ranger',
        'Focus',
        'Fusion',
        'Fiesta',
        'ASX',
        'Carisma',
        'Colt',
        'Eclipce Cross',
        'Evoque',
        'Freelander',
        'Almera',
        'Avenir',
        'Cube',
        'Juke',
        'Micra',
        'Leaf',
        'Tiida',
        'Sunny',
        'X-Trail',
        'Serena',
        'Aveo',
        'Blazer',
        'Camaro',
        'Cruze',
        'Cobalt',
        'Lacetti',
        'Epica',
        'Express',
    ];

    createRandomName(): string {
        const carBrand: string = this.cars[Math.floor(Math.random() * this.cars.length)];
        const carModel: string = this.models[Math.floor(Math.random() * this.models.length)];
        return `${carBrand} ${carModel}`;
    }

    createRandomColor(): string {
        const colorLetters = '0123456789abcdef';
        this.color = '#';
        for (let i = 0; i < 6; i++) {
            this.color += colorLetters[Math.floor(Math.random() * 16)];
        }
        return this.color;
    }
}
