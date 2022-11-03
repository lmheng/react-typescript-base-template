import { ApiCore } from "../core";

const base = "logger";

export const apiLogger = (url: string) =>
  new ApiCore({
    getAll: false,
    getSingle: false,
    post: true,
    put: false,
    delete: false,
    url: base + url,
  });
