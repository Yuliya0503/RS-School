export default class Filter {
    publishingHouse: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-publishingHouse');
    cover: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-cover');
    genre: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-genre');
    cards: NodeListOf<HTMLElement> = document.querySelectorAll('.products-element');
    hiden: NodeListOf<HTMLElement> = document.querySelectorAll('.hide');

    filter(category: string, items: NodeListOf<HTMLElement>) {
        items.forEach((item) => {
            //const isShowAll = category.toLowerCase() === 'reset';
            const isItemFiltered = !item.classList.contains(category);
            if (isItemFiltered /* && !isSowAll*/) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
        });
    }

    filterPublishingHouse() {
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

    filterCover() {
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

    filterGenre() {
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
