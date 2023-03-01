import axiosClient from "./axiosClient";

const itemApi = {
  itemDatasRegister: (params: string) =>
    axiosClient.post("itemDatasRegister", params),
};
export default itemApi;
