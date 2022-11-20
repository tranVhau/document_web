import axiosClient from "./axiosClient";

const documentAPI = {
  getAll: () => {
    const url = "http://localhost:8000/api/documents";
    return axiosClient.get(url);
  },

  getAllPending: () => {
    const url = "http://localhost:8000/api/documents/pending";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `http://localhost:8000/api/document/${id}`;
    return axiosClient.get(url);
  },

  getPending: (id) => {
    const url = `http://localhost:8000/api/document/pending/${id}`;
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

  delete: (id) => {
    const url = `http://localhost:8000/api/document/${id}`;
    return axiosClient.delete(url);
  },

  update: (id, document) => {
    const url = `http://localhost:8000/api/document/${id}?_method=PUT`;
    return axiosClient({
      url: url,
      method: "post",
      data: document,
    });
  },
};

export default documentAPI;
