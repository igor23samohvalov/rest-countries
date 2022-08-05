export interface ICardPreview {
  capital: string;
  flags: { png: string };
  name: { common: string; official: string };
  population: number;
  region: string;
}

export interface ICardFull {
  capital: string;
  currencies: any;
  img: string;
  languages: string[];
  name: string;
  nativeName: any;
  population: number;
  subregion: string;
  tld: string;
  region: string;
  borders?: string[];
  loading?: boolean;
}

export interface ISingleCardFetch {
  capital: string[];
  currencies: { any: string };
  flags: { png: string };
  languages: { any: string };
  name: { common: string; official: string; nativeName: { any: string } };
  population: number;
  subregion: string;
  tld: string[];
  region: string;
  borders: string[];
}
