import axiosClient from "./axiosClient";

const historyAPI = {
  getAll: () => {
    const url = "http://localhost:8000/api/approved_logs";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `http://localhost:8000/api/approved_log/${id}`;
    return axiosClient.get(url);
  },

  store: (history) => {
    const url = `http://localhost:8000/api/approved_logs`;
    return axiosClient({
      url: url,
      method: "post",
      data: history,
    });
  },
};

export default historyAPI;
