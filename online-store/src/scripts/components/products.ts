import { CATALOG } from '../catalog/catalog';
import { CatalogInterface } from '../helpers/interfaces';
import LocalStorage from '../localStorage/localStorage';

const localStorageUtil = new LocalStorage();
export default class Products implements CatalogInterface {
    id: string;
    name: string;
    img: string;
    quantity: string;
    year: string;
    cover: string;
    genre: string;
    publishingHouse: string;
    favorite: boolean;
    classNameActive: string;
    labelAdd: string;
    labelRemove: string;

    constructor() {
        this.classNameActive = 'products-element__button_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handlerSetLocalStorage(element: HTMLElement, id: CatalogInterface['id']) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }
    }

    render(): void {
        const productsStore = localStorageUtil.getProd();
        let htmlCatalog = '';

        const rootElement: HTMLElement = document.getElementById('root');
        CATALOG.forEach(({ id, name, img, quantity, year, cover, genre, publishingHouse, favorite }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <div class="products-element">
              <h4 class="products-element__name">${name}</h4>
              <div class="products-element__img">
                <img src="${img}" alt="${name}">
              </div>
              <ul class="products-element__description">
                <li class="products-element__description_quantity">Количество: ${quantity}</li>
                <li class="products-element__description_year">Год издания: ${year}</li>
                <li class="products-element__description_cover">Переплет: ${cover}</li>
                <li class="products-element__description_genre">Жанр: ${genre}</li>
                <li class="products-element__description_publishingHouse">Издательство: ${publishingHouse}</li>
                <li class="products-element__description_favorite">Популярность: ${favorite} </li>
              </ul>
              <button class="products-element__button button ${activeClass}" onclick="productsPage.handlerSetLocalStorage(this, '${id}');">${activeText}</button>
            </div>`;
        });

        const html = `
          <div class="products-container">
            ${htmlCatalog}
          </div>`;

        rootElement.innerHTML = html;
    }
}
