import { apiProvider } from "./provider";
import { IHttpInput } from "../../types";

interface IApiOption {
  getAll: boolean;
  getSingle: boolean;
  post: boolean;
  put: boolean;
  delete: boolean;
  url: string;
}

export class ApiCore {
  getAll!: (httpInput: IHttpInput) => Promise<any>;
  getSingle!: (httpInput: IHttpInput) => Promise<any>;
  post!: (httpInput: IHttpInput) => Promise<any>;
  put!: (httpInput: IHttpInput) => Promise<any>;
  delete!: (httpInput: IHttpInput) => Promise<any>;

  constructor(options: IApiOption) {
    if (options.getAll) {
      this.getAll = (httpInput: IHttpInput) => {
        return apiProvider.getAll(options.url, httpInput);
      };
    }

    if (options.getSingle) {
      this.getSingle = (httpInput: IHttpInput) => {
        return apiProvider.getSingle(options.url, httpInput);
      };
    }

    if (options.post) {
      this.post = (httpInput: IHttpInput) => {
        return apiProvider.post(options.url, httpInput);
      };
    }

    if (options.put) {
      this.put = (httpInput: IHttpInput) => {
        return apiProvider.put(options.url, httpInput);
      };
    }

    if (options.delete) {
      this.delete = (httpInput: IHttpInput) => {
        return apiProvider.remove(options.url, httpInput);
      };
    }
  }
}
