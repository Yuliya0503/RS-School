import { CATALOG } from '../catalog/catalog';
import { CatalogInterface } from '../helpers/interfaces';

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

    render(): void {
        let htmlCatalog = '';
        const rootElement: HTMLElement = document.getElementById('root');
        CATALOG.forEach(({ id, name, img, quantity, year, cover, genre, publishingHouse, favorite }) => {
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
              <button class="products-element__button button" data-id="${id}">Добавить в корзину</button>
            </div>`;
        });

        const html = `
          <div class="products-container">
            ${htmlCatalog}
          </div>`;

        rootElement.innerHTML = html;
    }
}
