import axios from "axios";
import { itemDatas } from "../../typs/itemDatas";

const BASE_URL = "http://localhost:5000";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

//APIを叩く前に前処理を行う
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    header: {
      "Content-Type": "application/json",
      // authorization
    },
  };
});

// axiosClient.interceptors.response.use((response: itemDatas) => {
//   (response) => {
//     return response;
//   };
//   (err: string) => {
//     throw err.response;
//   };
// });

export default axiosClient;
