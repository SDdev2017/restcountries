export type FetchedData = {
    borders?: string[],
    name: {
        common: string,
        nativeName: {[key: string]: string}
    },
    flags: {
        png: string,
        svg: string
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    tld: string[],
    currencies: {[key: string]: {name: string, symbol: string}},
    languages: {[key: string]: string},
    [key: string]: any
};