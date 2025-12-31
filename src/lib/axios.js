import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-back-end-ten.vercel.app/api" : "https://chat-back-end-ten.vercel.app/api",
  withCredentials: true,
});
