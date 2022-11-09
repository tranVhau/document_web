import axiosClient from "./axiosClient";

const authAPI = {
  login: (email, password) => {
    const url = "http://localhost:8000/api/auth/login";
    return axiosClient.post(url, { email, password });
  },
};

export default authAPI;
