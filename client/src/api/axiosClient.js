// api/axiosClient.js
import axios from "axios";

import { userActionReducer } from "../store/slices/userSlice";
import store from "../store";

// import queryString from "query-string";
// Set up default config for http requests here

const axiosClient = axios.create();
// ({
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//   },

//   // paramsSerializer: (params) => queryString.stringify(params),
// });

// Add a request interceptor

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    const auth = token ? `Bearer ${token}` : "";
    config.headers["Authorization"] = auth;

    return config;
  },
  (error) => Promise.reject(error)
);

// axiosClient.interceptors.request.use(
//   function (config) {
//     //handle token...
//     // config.headers.authorization = localStorage.getItem("userToken");
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

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
    if (error.response.status === 401) {
      localStorage.clear();
      // window.location.reload();
      store.dispatch(userActionReducer.visibleLogin());
    }
    throw error;
  }
);
export default axiosClient;
