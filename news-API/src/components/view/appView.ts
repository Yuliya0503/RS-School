import News from './news/news';
import Sources from './sources/sources';
import { Data } from './news/news';

export interface Source {
    id: string;
    name: string;
}
export interface DataNews {
    status: string;
    totalResults: number;
    articles: Array<Data>;
    sources: Array<Source>;
}
export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: DataNews): void {
        const values: Data[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: DataNews): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
