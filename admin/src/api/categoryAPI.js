import axiosClient from "./axiosClient";

const categoryAPI = {
  getAll: () => {
    const url = "http://192.168.2.235:8082/api/comics";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `http://localhost:8000/api/category/${id}`;
    return axiosClient.get(url);
  },
};

export default categoryAPI;
