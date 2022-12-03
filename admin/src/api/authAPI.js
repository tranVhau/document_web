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

  logout: () => {
    const url = `http://localhost:8000/api/auth/logout`;
    return axiosClient.post(url);
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

  getAll: () => {
    const url = "http://localhost:8000/api/users";
    return axiosClient.get(url);
  },

  store: (user) => {
    const url = "http://localhost:8000/api/user";
    return axiosClient({
      url: url,
      method: "post",
      data: user,
    });
  },

  delete: (id) => {
    const url = `http://localhost:8000/api/user/${id}`;
    return axiosClient.delete(url);
  },

  update: (id, user) => {
    const url = `http://localhost:8000/api/user/${id}?_method=PUT`;
    return axiosClient({
      url: url,
      method: "post",
      data: user,
    });
  },
};

export default authAPI;
