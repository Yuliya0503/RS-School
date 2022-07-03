import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '70c2ecf9bc9546b18e5ba711d91e6ec5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
