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
  currencies: string[];
  capital: string[];
  region: string;
  subregion: string;
  languages: string[];
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
