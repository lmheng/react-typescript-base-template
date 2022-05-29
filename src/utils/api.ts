import axios from "axios";

interface IHttpInput {
  url: string;
  authenticated: boolean;
  body: any;
}

const token = "";

let instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

const getData = async <T>(input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return instance
    .get<T>(input.url)
    .then((response) => response)
    .catch((error) => alert(error));
};

const postData = async <T>(input: IHttpInput) => {
  if (input.authenticated) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return instance
    .post<T>(input.url, input.body)
    .then((response) => response)
    .catch((error) => alert(error));
};

export const Api = {
  getData,
  postData,
};
