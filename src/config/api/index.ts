import axios from "axios";
import Auth from "./auth";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 500000,
});

const api = {
  auth: new Auth(axiosInstance),

  HttpClient: axiosInstance,
};

export default api;
