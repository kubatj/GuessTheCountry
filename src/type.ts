export type Country = {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  ccn3: string;
  independant: boolean;
  status: string;
  unMember: boolean;
  currencies: { [currencyCode: string]: { name: string; symbol: string } };
  capital: string[];
  region: string;
  subregion: string;
  languages: { [languageCode: string]: string };
  borders: string[];
  area: number;
  population: number;
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
};
