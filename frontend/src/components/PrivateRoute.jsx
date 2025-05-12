import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;

  // Redireciona para /login se o usuário não estiver autenticado
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
