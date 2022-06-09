import { ApiCore } from "./core";

const url = "login";

export const apiLogin = new ApiCore({
  getAll: false,
  getSingle: false,
  post: true,
  put: false,
  delete: false,
  url: url,
});
