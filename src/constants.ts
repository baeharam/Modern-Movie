import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const BASE_API_URL = "https://api.themoviedb.org/3";
const API_KEY = "3fa357e347e65395d273134fa4927dfb";

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 1000,
  params: {
    api_key: API_KEY
  }
})

axiosInstance.interceptors.response.use((response) => {
  return camelcaseKeys(response, { deep: true });
})