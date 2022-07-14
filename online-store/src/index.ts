import './global.scss';

import LocalStorage from './scripts/localStorage/localStorage';
import Products from './scripts/components/products';

const localStorage = new LocalStorage();
localStorage.getProd();

const productsPage = new Products();
productsPage.render();
