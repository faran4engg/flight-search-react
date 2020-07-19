import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:9001/"
      : "http://localhost:9001/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default instance;
