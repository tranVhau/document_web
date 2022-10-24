// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import { parse, stringify } from "qs";
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: "https://js-post-api.herokuapp.com/api",
  headers: {
    "content-type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params),
  paramsSerializer: {
    encode: parse,
    serialize: (params) => queryString.stringify(params),
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    //handle token...
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
