import axiosClient from "./axiosClient";

const documentAPI = {
  getAll: () => {
    const url = "http://localhost:8000/api/documents";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `http://localhost:8000/api/document/${id}`;
    return axiosClient.get(url);
  },

  store: (category) => {
    const url = `http://localhost:8000/api/document`;
    return axiosClient({
      url: url,
      method: "post",
      data: category,
    });
  },

  delete: (id) => {
    const url = `http://localhost:8000/api/document/${id}`;
    return axiosClient.delete(url);
  },

  update: (id, category) => {
    const url = `http://localhost:8000/api/document/${id}?_method=PUT`;
    return axiosClient({
      url: url,
      method: "post",
      data: category,
    });
  },
};

export default documentAPI;
