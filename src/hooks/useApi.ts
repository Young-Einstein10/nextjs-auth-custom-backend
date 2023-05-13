import { Auth, Post } from "@/config/api";
import useAxiosAuth from "./useAxiosAuth";

const useApi = () => {
  const axiosInstance = useAxiosAuth();

  const api = {
    auth: new Auth(axiosInstance),
    post: new Post(axiosInstance),
    HttpClient: axiosInstance,
  };

  return api;
};

export default useApi;
