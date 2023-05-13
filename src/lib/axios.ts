import axios from "axios";
import { BASE_URL } from "@/utils/constants";

// Axios Instance to update refresh token
export default axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: { "Content-Type": "application/json" },
});

// Axios Instance for normal client request
export const axiosAuth = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: { "Content-Type": "application/json" },
});
