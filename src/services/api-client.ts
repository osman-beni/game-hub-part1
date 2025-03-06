import axios, { CanceledError, AxiosError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "26ddd1f74dee488da0322be36c91076c" },
});

export { CanceledError, AxiosError };
