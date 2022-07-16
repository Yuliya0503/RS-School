import './global.scss';

import LocalStorage from './scripts/localStorage/localStorage';
import Products from './scripts/components/products';
import Sorting from './scripts/components/sorting';

const localStorage = new LocalStorage();
localStorage.getProd();
localStorage.setProducts();

const productsPage = new Products();
productsPage.render();

const sort = new Sorting();
sort.init();
