export default class Sorting {
    sortUpNum(sortType: string): void {
        const productsContainer: Element = document.querySelector('#products-container');
        for (let i = 0; i < productsContainer.children.length; i++) {
            for (let j = i; j < productsContainer.children.length; j++) {
                if (
                    +productsContainer.children[i].getAttribute(sortType) >
                    +productsContainer.children[j].getAttribute(sortType)
                ) {
                    const replacedNode: Element = productsContainer.replaceChild(
                        productsContainer.children[j],
                        productsContainer.children[i]
                    );
                    insertAfter(replacedNode, productsContainer.children[i]);
                }
            }
        }
    }

    sortUpStr(sortType: string): void {
        const productsContainer: Element = document.querySelector('#products-container');
        for (let i = 0; i < productsContainer.children.length; i++) {
            for (let j = i; j < productsContainer.children.length; j++) {
                if (
                    productsContainer.children[i].getAttribute(sortType) >
                    productsContainer.children[j].getAttribute(sortType)
                ) {
                    const replacedNode: Element = productsContainer.replaceChild(
                        productsContainer.children[j],
                        productsContainer.children[i]
                    );
                    insertAfter(replacedNode, productsContainer.children[i]);
                }
            }
        }
    }

    sortDownNum(sortType: string): void {
        const productsContainer: Element = document.querySelector('#products-container');
        for (let i = 0; i < productsContainer.children.length; i++) {
            for (let j = i; j < productsContainer.children.length; j++) {
                if (
                    +productsContainer.children[i].getAttribute(sortType) <
                    +productsContainer.children[j].getAttribute(sortType)
                ) {
                    const replacedNode: Element = productsContainer.replaceChild(
                        productsContainer.children[j],
                        productsContainer.children[i]
                    );
                    insertAfter(replacedNode, productsContainer.children[i]);
                }
            }
        }
    }

    sortDownStr(sortType: string): void {
        const productsContainer: Element = document.querySelector('#products-container');
        for (let i = 0; i < productsContainer.children.length; i++) {
            for (let j = i; j < productsContainer.children.length; j++) {
                if (
                    productsContainer.children[i].getAttribute(sortType) <
                    productsContainer.children[j].getAttribute(sortType)
                ) {
                    const replacedNode: Element = productsContainer.replaceChild(
                        productsContainer.children[j],
                        productsContainer.children[i]
                    );
                    insertAfter(replacedNode, productsContainer.children[i]);
                }
            }
        }
    }

    init(): void {
        const quantityUp: HTMLElement = document.querySelector('#quantity-up');
        quantityUp.addEventListener('click', this.sortUpNum.bind(this, 'data-quantity'));

        const quantityDown: HTMLElement = document.querySelector('#quantity-down');
        quantityDown.addEventListener('click', this.sortDownNum.bind(this, 'data-quantity'));

        const yearUp: HTMLElement = document.querySelector('#year-up');
        yearUp.addEventListener('click', this.sortUpNum.bind(this, 'data-year'));

        const yearDown: HTMLElement = document.querySelector('#year-down');
        yearDown.addEventListener('click', this.sortDownNum.bind(this, 'data-year'));

        const nameAZ: HTMLElement = document.querySelector('#name-A-Z');
        nameAZ.addEventListener('click', this.sortUpStr.bind(this, 'data-name'));

        const nameZA: HTMLElement = document.querySelector('#name-Z-A');
        nameZA.addEventListener('click', this.sortDownStr.bind(this, 'data-name'));
    }
}

function insertAfter(elem: Element, refElem: Element) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
