import axiosClient from "./axiosClient";

const categoryAPI = {
  getAll: () => {
    const url = "http://localhost:8000/api/categories";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `http://localhost:8000/api/category/${id}`;
    return axiosClient.get(url);
  },

  store: (category) => {
    const url = `http://localhost:8000/api/category`;
    return axiosClient({
      url: url,
      method: "post",
      data: category,
    });
  },

  delete: (id) => {
    const url = `http://localhost:8000/api/category/${id}`;
    return axiosClient.delete(url);
  },

  update: (id, category) => {
    const url = `http://localhost:8000/api/category/${id}`;
    return axiosClient({
      url: url,
      method: "put",
      data: category,
    });
  },
};

export default categoryAPI;
