export default class Filter {
    publishingHouse: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-publishingHouse');
    cover: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-cover');
    genre: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-genre');
    cards: NodeListOf<HTMLElement> = document.querySelectorAll('.products-element');
    hiden: NodeListOf<HTMLElement> = document.querySelectorAll('.hide');

    filter(category: string, items: NodeListOf<HTMLElement>): void {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            if (isItemFiltered) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
        });
    }

    filterPublishingHouse(): void {
        this.publishingHouse.forEach((button) => {
            button.addEventListener('click', () => {
                const currentCategory = button.dataset.id;
                this.filter(currentCategory, this.cards);
            });
            button.addEventListener('click', () => {
                this.publishingHouse.forEach((element) => element.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    filterCover(): void {
        this.cover.forEach((button) => {
            button.addEventListener('click', () => {
                const currentCategory = button.dataset.id;
                this.filter(currentCategory, this.cards);
            });
            button.addEventListener('click', () => {
                this.cover.forEach((element) => element.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    filterGenre(): void {
        this.genre.forEach((button) => {
            button.addEventListener('click', () => {
                const currentCategory = button.dataset.id;
                this.filter(currentCategory, this.cards);
            });
            button.addEventListener('click', () => {
                this.genre.forEach((element) => element.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}
