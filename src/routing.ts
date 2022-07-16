const allParams = ['name', 'capital', 'population', 'region', 'flags'];
const singleParams = ['name', 'capital', 'population', 'subregion', 'region', 'flags', 'tld', 'currencies', 'languages', 'borders'];

export const route = (name: string = '', region: string = ''):string => {
  if (!region && !name) {
    return `https://restcountries.com/v3.1/all?fields=${allParams.join(',')}`;
  }
  return `https://restcountries.com/v3.1/name/${name}?fields=${singleParams.join(',')}`;
}
