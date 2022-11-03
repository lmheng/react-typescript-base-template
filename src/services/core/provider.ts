import axios from "axios";
import { Configurations } from "../../constants/configurations";
import { IHttpInput } from "../../types";
import { CookieService, Crypto } from "../../utils";
import { handleResponse, handleError } from "../../utils/response";

// init token from cookie here
// can also change configuration to use httpOnly cookie https://stackoverflow.com/questions/64552621/how-to-add-httponly-cookie-to-axios-request
const token = CookieService.get(Configurations.TOKEN_NAME);
const baseURL = process.env.REACT_APP_API;

let instance = axios.create({
  baseURL: baseURL,
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

  return axios
    .get<T>(url)
    .then((res) => handleResponse(res, url))
    .catch((err) => handleError(err, url));
};

const getSingle = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axios
    .get<T>(`${url}/${Crypto.encrypt(input.id)}`)
    .then((res) => handleResponse(res, url))
    .catch((err) => handleError(err, url));
};

const post = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axios
    .post<T>(url, Crypto.encrypt(input.body))
    .then((res) => handleResponse(res, url))
    .catch((err) => handleError(err, url));
};

const put = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axios
    .put<T>(url, Crypto.encrypt(input.body))
    .then((res) => handleResponse(res, url))
    .catch((err) => handleError(err, url));
};

const remove = async <T>(url: string, input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return axios
    .delete<T>(`${url}/${Crypto.encrypt(input.id)}`)
    .then((res) => handleResponse(res, url))
    .catch((err) => handleError(err, url));
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  remove,
};
