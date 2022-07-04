type Option = [string];

interface LoaderClass {
  baseLink: string;
  options?: Option | {apiKey?: string;};
};

class Loader implements LoaderClass {
    baseLink: string;
    options?: Option | {apiKey?: string;};

    constructor(baseLink: string, options?: Option | {apiKey?: string;} ) {
        this.baseLink = baseLink;
        this.options = options;
    }


    public getResp<T> (
        { endpoint, options}: {endpoint: string, options?: Option | {}},
        callback = (data: T): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options as Option);
    };

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(endpoint: string, options?: Option) {
      const urlOptions: { [index: string]:  number | {}}  = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options: Option) {
        fetch(this.makeUrl(endpoint, options), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
