import { ICard } from '../helpers/interfaces';

export class Card {
    id: string;
    name: string;
    img: string;
    quantity: string;
    year: string;
    cover: string;
    genre: string;
    publishingHouse: string;
    favorite: boolean;
    addClickCounter: number;
    template: string;

    constructor(card: ICard) {
        this.id = card.id;
        this.name = card.name;
        this.img = card.img;
        this.quantity = card.quantity;
        this.year = card.year;
        this.cover = card.cover;
        this.genre = card.genre;
        this.publishingHouse = card.publishingHouse;
        this.favorite = card.favorite;
        this.addClickCounter = 0;

        this.template = `
        <h4 class="products-element__name">${this.name}</h4>
        <div class="products-element__img">
          <img src="${this.img}" alt="${this.name}">
        </div>
        <ul class="products-element__description">
          <li class="products-element__description_quantity">Количество: ${this.quantity}</li>
          <li class="products-element__description_year">Год издания: ${this.year}</li>
          <li class="products-element__description_cover">Переплет: ${this.cover}</li>
          <li class="products-element__description_genre">Жанр: ${this.genre}</li>
          <li class="products-element__description_publishingHouse">Издательство: ${this.publishingHouse}</li>
          <li class="products-element__description_favorite">Популярность: ${this.favorite} </li>
        </ul>
        <button class="products-element__button button-add button">Добавить</button>
        <button class="products-element__button button-remove button">Удалить</button>
       `;
    }
}
