export default class Sorting {

  sortQuantity() {
    let productsContainer = document.querySelector('.products-container');
    for (let i = 0; i < productsContainer.children.length; i++) {
      for (let j = i; j < productsContainer.children.length; j++) {
        if (+(productsContainer.children[i].getAttribute('data-quantity')) > +(productsContainer.children[j].getAttribute('data-quantity'))) {
           const replacedNode = productsContainer.replaceChild(productsContainer.children[j], productsContainer.children[i]);
          insertAfter(replacedNode, productsContainer.children[i]);

        }
      }
    }
  }

  init() {
    const quantity: HTMLElement = document.querySelector('#quantity-up');
    quantity.onclick = this.sortQuantity;
  }
}





function insertAfter(elem: Element, refElem: Element){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

