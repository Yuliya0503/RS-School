type Option = [string];

interface LoaderClass {
    baseLink: string;
    options?: Option | { apiKey?: string };
}

enum Method {
    POST,
    GET,
}

type MethodString = keyof typeof Method;
class Loader implements LoaderClass {
    public baseLink: string;
    public options?: Option | { apiKey?: string };

    constructor(baseLink: string, options?: Option | { apiKey?: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options }: { endpoint: string; options?: Option | Record<string, unknown> },
        callback = (_data: T): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options as Option);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(endpoint: string, options?: Option): string {
        const urlOptions: { [index: string]: number | unknown } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key): void => {
            url += `${key}=${urlOptions[key]}&`;
        });
        
        return url.slice(0, -1);
    }

    private load<T>(method: MethodString, endpoint: string, callback: (data: T) => void, options: Option): void {
        fetch(this.makeUrl(endpoint, options), { method })
            .then(this.errorHandler)
            .then((res): Promise<T> => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
