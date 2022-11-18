import axiosClient from "./axiosClient";

const authAPI = {
  login: (userData) => {
    const url = "http://localhost:8000/api/auth/login";
    return axiosClient({
      url: url,
      method: "post",
      data: userData,
    });
  },

  me: () => {
    const url = "http://localhost:8000/api/auth/me";
    return axiosClient.get(url);
  },

  register: (userData) => {
    const url = "http://localhost:8000/api/auth/register";
    return axiosClient({
      url: url,
      method: "post",
      data: userData,
    });
  },
};

export default authAPI;
