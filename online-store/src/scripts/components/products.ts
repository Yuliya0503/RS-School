import { CATALOG } from '../catalog/catalog';
import { Card } from './card';

export default class Products {

    addProduct(id: string) {
        const count = localStorage.getItem(id);
        if (count) {
            localStorage[id] = (+count + 1).toString();
        } else {
            localStorage.setItem(id, '1');
        }
    }

    removeProduct(id: string) {
        const count = localStorage.getItem(id);
        if (+count > 1) {
            localStorage[id] = (+count - 1).toString();
        } else if (+count === 1) {
            delete localStorage[id];
        }
    }

    render(): void {
        const rootElement: HTMLElement = document.getElementById('products-container');
        CATALOG.forEach((elem) => {
            const product = document.createElement('div');
            product.classList.add('products-element');
            const card = new Card(elem);
            product.innerHTML = card.template;
            rootElement.appendChild(product);
            const addButton = product.querySelector('.button-add');
            const removeButton = product.querySelector('.button-remove');
            addButton.addEventListener('click', this.addProduct.bind(this, card.id));
            removeButton.addEventListener('click', this.removeProduct.bind(this, card.id));
        });
        //data-quantity="${quantity}" data-year="${year}" data-name="${name}
    }
}
