import axios from "axios";
import { getToken } from "./function";
const back = axios.create({
  baseURL: "https://api.spotify.com/v1/browse",
});
export { back };
