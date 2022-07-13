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
        let htmlCatalog: string = '';
        const rootElement:HTMLElement = document.getElementById('root');
        CATALOG.forEach(({ id, name, img, quantity, year, cover, genre, publishingHouse, favorite }) => {

          htmlCatalog += `
            <div>
              <h4>${name}</h4>
              <div>
                <img src="${img}" alt="${name}">
              </div>
              <ul>
                <li>Количество: ${quantity}</li>
                <li>Год издания: ${year}</li>
                <li>Переплет: ${cover}</li>
                <li>Жанр: ${genre}</li>
                <li>Издательство: ${publishingHouse}</li>
                <li>Популярность: ${favorite} </li>
              </ul>
              <button class="button" data-id="${id}">Добавить в корзину</button>
            </div>`;
        });

        const html: string = `
    <div>
      ${htmlCatalog}
    </div>`;

        rootElement.innerHTML = html;
    }
}
