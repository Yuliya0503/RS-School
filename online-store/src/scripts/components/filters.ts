export default class Filter {
    buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.filter-button');
    cards: NodeListOf<HTMLElement> = document.querySelectorAll('.products-element');

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

    app() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const currentCategory = button.dataset.id;
                this.filter(currentCategory, this.cards);
            });
        });
    }
}
