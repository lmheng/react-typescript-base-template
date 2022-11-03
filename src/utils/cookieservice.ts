import Cookie from "universal-cookie";

const cookie = new Cookie();

const get = (key: string) => {
  return cookie.get(key);
};

const set = (key: string, value: string, options?: Object) => {
  cookie.set(key, value, options);
};

const remove = (key: string) => {
  cookie.remove(key);
};

export const CookieService = {
  get,
  set,
  remove,
};
