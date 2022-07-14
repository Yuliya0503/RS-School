export default class LocalStorage {
  public keyName: string;

  comstructor() {

    this.keyName = 'products';
  }
  
  //получаем продукты из локального хранилища

   public getProd(): string[] {
    const productsLocalStorage: string = localStorage.getItem(this.keyName);
    if(productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage) as string[];
    }
    return [];
  }
  //добавляем значение в локальное хранилище

  public putProducts(id: string): {pushProduct: boolean, products: string[]} {
    let products: string[] = this.getProd();
    let pushProduct: boolean = false;
    let index: number = products.indexOf(id);

    if(index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return { pushProduct, products };
  }
}
