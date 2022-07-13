import { Helper } from "./helpers";

const save = (key: string, input: any): void => {
  if (Helper.isValidObject(input))
    localStorage.setItem(key, JSON.stringify(input));
  else if (Helper.isValid(input)) localStorage.setItem(key, input);
};

const retrieve = (key: string): any => {
  const cacheObject = Helper.parseValueString(localStorage.getItem(key));

  try {
    return JSON.parse(cacheObject);
  } catch {
    return cacheObject;
  }
};

export const Cache = {
  save,
  retrieve,
};
