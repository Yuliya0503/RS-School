import News from './news/news';
import Sources from './sources/sources';

interface Data {
  _item: string;
  idx: number;
  urlToImage: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  source: { name: string};
}

interface Source {
  id: string;
  name: string;
}
interface DataNews {
  status: string;
  totalResults: number;
  articles: Array<Data>;
  sources: Array<Source>;
}
export class AppView {
  news: News;
  sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataNews): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
