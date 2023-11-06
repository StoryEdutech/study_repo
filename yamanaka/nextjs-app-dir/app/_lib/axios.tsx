import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
export default axios;
