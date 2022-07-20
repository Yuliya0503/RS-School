import { CATALOG } from '../catalog/catalog';
import { Card } from './card';

export default class Products {
    private addProduct(id: string) {
        const count: string = localStorage.getItem(id);
        if (count) {
            localStorage[id] = (+count + 1).toString();
        } else {
            localStorage.setItem(id, '1');
        }
    }

    private removeProduct(id: string) {
        const count: string = localStorage.getItem(id);
        if (+count > 1) {
            localStorage[id] = (+count - 1).toString();
        } else if (+count === 1) {
            delete localStorage[id];
        }
    }

    public render(): void {
        const rootElement: HTMLElement = document.getElementById('products-container');
        let count = 0;
        const countElement: Element = document.querySelector('.count');
        const fineElement: Element = document.querySelector('.fine');
        const returnToShop: Element = document.querySelector('.ok');
        returnToShop.addEventListener('click', () => {
            fineElement.classList.add('modal');
        });
        CATALOG.forEach((elem) => {
            const product = document.createElement('div');
            product.classList.add('products-element');
            const card = new Card(elem);
            product.classList.add(`${card.publishingHouse}`);
            product.classList.add(`${card.genre}`);
            product.classList.add(`${card.cover}`);
            product.innerHTML = card.template;
            rootElement.appendChild(product);
            const addButton = product.querySelector('.button-add');
            const removeButton = product.querySelector('.button-remove');
            addButton.addEventListener('click', this.addProduct.bind(this, card.id));
            addButton.addEventListener('click', () => {
                addButton.classList.add('active');
                if (count < 20) {
                    count += 1;
                    countElement.innerHTML = count.toString();
                } else {
                    fineElement.classList.remove('modal');
                }
            });
            removeButton.addEventListener('click', this.removeProduct.bind(this, card.id));
            removeButton.addEventListener('click', () => {
                addButton.classList.remove('active');
                if (count > 1) {
                    count -= 1;
                } else {
                    count = 0;
                }
                countElement.innerHTML = count.toString();
            });
            product.setAttribute('data-quantity', `${card.quantity}`);
            product.setAttribute('data-year', `${card.year}`);
            product.setAttribute('data-name', `${card.name}`);
        });
    }
}
