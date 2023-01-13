import axios from "axios";

const Api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

Api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("Token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log({ message: "Error" + error });
  }
});

export default Api;
