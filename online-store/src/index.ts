import './global.scss';
import Products from './scripts/components/products';
import LocalStorage from './scripts/localStorage/localStorage';


const productsPage = new Products();
productsPage.render();

const localStorage = new LocalStorage();
localStorage.getProd();
