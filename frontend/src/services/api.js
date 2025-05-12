// src/services/api.js
import axios from "axios";
import { getAuth } from "firebase/auth";

// Cria uma instância do Axios com a URL base do seu backend
const api = axios.create({
  baseURL: "http://localhost:3001/api", // Ajuste a URL se necessário
});

// Interceptor para adicionar o token do Firebase a cada requisição
api.interceptors.request.use(async (config) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken(); // pega o token JWT do Firebase
    config.headers.Authorization = `Bearer ${token}`; // adiciona no cabeçalho
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
