import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataNews } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener<'click'>('click', (e: Event): void =>
            this.controller.getNews<DataNews>(e, (data: DataNews) => this.view.drawNews(data))
        );
        this.controller.getSources<DataNews>((data: DataNews): void => this.view.drawSources(data));
    }
}

export default App;
