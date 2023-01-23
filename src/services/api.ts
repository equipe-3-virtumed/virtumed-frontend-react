import axios from "axios";

// const api = axios.create({
//   baseURL: "https://virtumed-backend-production.up.railway.app/"
// });

const api = axios.create({
  baseURL: "https://virtumed-backend-production.up.railway.app/"
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log(error);
  }
});

export default api;