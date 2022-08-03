const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.substring(1);

const isObjEmpty = (object: object): boolean =>
  Object.keys(object).length === 0;

const search = (string: string, query: string): boolean =>
  string.toLowerCase().includes(query.toLowerCase());

export { capitalizeFirstLetter, isObjEmpty, search };
