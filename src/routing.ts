const allParams = ['name', 'capital', 'population', 'region', 'flags'];
const singleParams = ['name', 'capital', 'population', 'subregion', 'region', 'flags', 'tld', 'currencies', 'languages', 'borders'];

export const routeAll = ():string => {
    return `https://restcountries.com/v3.1/all?fields=${allParams.join(',')}`;
}

export const routeSingle = (name: string = ''):string => {
  return `https://restcountries.com/v3.1/name/${name}?fields=${singleParams.join(',')}`;
}

export const routeCodes = (codes: string[]):string => {
  return `https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`;
};

