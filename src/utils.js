const capitalizeFirstLetter = (string: string) =>
  string[0].toUpperCase() + string.substring(1);

const isObjEmpty = (object: object) => Object.keys(object).length === 0;

export { capitalizeFirstLetter, isObjEmpty };
