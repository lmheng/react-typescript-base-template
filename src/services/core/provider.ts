import axios from "axios";
import { Configurations } from "../../constants/configurations";
import { IHttpInput } from "../../types";
import { handleResponse, handleError } from "./response";

import cookieservice from "../../utils/cookieservice";
import encryption from "../../utils/encryption";

//init token from cookie here
const token = cookieservice.get(Configurations.TOKEN_NAME);

let instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

const getAll = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return await axios.get<T>(url).then(handleResponse).catch(handleError);
};

const getSingle = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return await axios
    .get<T>(`${url}/${encryption.encrypt(input.id)}`)
    .then(handleResponse)
    .catch(handleError);
};

const post = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return await axios
    .post<T>(url, encryption.encrypt(input.body))
    .then(handleResponse)
    .catch(handleError);
};

const put = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return await axios
    .put<T>(url, encryption.encrypt(input.body))
    .then(handleResponse)
    .catch(handleError);
};

const remove = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return await axios
    .delete<T>(url, input.id)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  remove,
};
