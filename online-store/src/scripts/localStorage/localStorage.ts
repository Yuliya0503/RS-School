import { CATALOG } from '../catalog/catalog';

export default class LocalStorage {
    public keyName: string;

    constructor() {
        this.keyName = 'products';
    }

    public getProd(): string[] {
        const productsLocalStorage: string = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage) as string[];
        }
        return [];
    }

    setProducts() {
        localStorage.setItem(this.keyName, JSON.stringify(CATALOG));
    }

    addProduct(id: string) {
        localStorage.setItem(id, '1');
    }
}
