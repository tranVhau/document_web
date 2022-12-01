import axiosClient from "./axiosClient";

const documentAPI = {
  getAll: () => {
    const url = "http://localhost:8000/api/documents";
    return axiosClient.get(url);
  },

  getLimit: (limit) => {
    const url = `http://localhost:8000/api/documents/${limit}`;
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `http://localhost:8000/api/document/${id}`;
    return axiosClient.get(url);
  },

  store: (document) => {
    const url = `http://localhost:8000/api/document`;
    return axiosClient({
      url: url,
      method: "post",
      data: document,
    });
  },

  search: (keyword) => {
    const url = `http://localhost:8000/api/documents/search/${keyword}`;
    return axiosClient.get(url);
  },

  getAllCategory: () => {
    const url = "http://localhost:8000/api/categories";
    return axiosClient.get(url);
  },

  getByCategory: (id) => {
    const url = `http://localhost:8000/api/doc-cate/${id}`;
    return axiosClient.get(url);
  },
};

export default documentAPI;
