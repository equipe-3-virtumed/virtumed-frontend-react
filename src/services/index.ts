import axios from "axios";

const Api = axios.create({ baseURL: process.env.API_URL });

Api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log({ message: "Error" + error });
  }
});

export default Api;
