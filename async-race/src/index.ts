import ApiCar from './scripts/api/ApiCar';
import ApiEngine from './scripts/api/ApiEngine';
import ApiWinner from './scripts/api/ApiWinner';
import { App } from './scripts/app/app';
import './styles/style.css';

//console.log('hello!');
window.onload = () => {
    new App(document.body);
    new ApiCar();
    new ApiEngine();
    new ApiWinner();
};
