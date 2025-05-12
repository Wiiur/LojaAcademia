import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const verificarAcesso = async () => {
      try {
        const response = await api.get("/meus-dados");
        setUserData(response.data); // <-- guardar os dados recebidos
      } catch (error) {
        console.error("Erro na rota protegida:", error.response?.data);
      }
    };

    verificarAcesso();
  }, []);
  const navigate = useNavigate();

  const pageHome = async () => {
    navigate("/");
  }

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center ">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard!</h2>
        {userData ? (
          <div className="mb-4">
            <p><strong>Email:</strong> {userData.email}</p>
            {userData.nome && <p><strong>Nome:</strong> {userData.nome}</p>}
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
          <div className="space-x-2">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Sair
              
            </button>
            <button
            onClick={pageHome}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Home
            </button>
          </div>
      </div>
      
    </div>
    
  );
};

export default Dashboard;
