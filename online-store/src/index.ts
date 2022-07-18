import './global.scss';

import LocalStorage from './scripts/localStorage/localStorage';
import Products from './scripts/components/products';
import Sorting from './scripts/components/sorting';
import Filter from './scripts/components/filters';
import Input from './scripts/components/input';


const localStorage = new LocalStorage();
localStorage.getProd();
//localStorage.setProducts();

const productsPage = new Products();
productsPage.render();

const sort = new Sorting();
sort.init();

const filter = new Filter();
filter.init();

const input = new Input();
input.filter();
