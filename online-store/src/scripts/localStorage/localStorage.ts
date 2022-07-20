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

    addProduct(id: string): void {
        localStorage.setItem(id, '1');
    }
}
