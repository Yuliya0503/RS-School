import { CatalogInterface } from '../helpers/interfaces';

export default class LocalStorage {
    public keyName: string;

    constructor() {
        this.keyName = 'products';
    }

    //получаем продукты из локального хранилища

    public getProd(): string[] {
        const productsLocalStorage: string = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage) as string[];
        }
        return [];
    }
    //добавляем значение в локальное хранилище

    public putProducts(id: CatalogInterface['id']): { pushProduct: boolean; products: string[] } {
        const products: string[] = this.getProd();
        let pushProduct = false;
        const index: number = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products };
    }
}
