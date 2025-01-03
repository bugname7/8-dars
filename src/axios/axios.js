import axios from "axios";
import { getToken } from "./function";
const back = axios.create({
  baseURL: "https://api.spotify.com/v1/browse/",
});
back.interceptors.request.use(async (config) => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    config.headers.Authorization = authToken;
  } else {
    await getToken();
    config.headers.Authorization = authToken;
  }
  return config;
});
export { back };
