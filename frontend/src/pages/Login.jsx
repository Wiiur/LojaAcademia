import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            let userCredential;

            if (isRegister) {
                userCredential = await register(email, password);
            } else {
                userCredential = await login(email, password);
            }

            const token = await userCredential.user.getIdToken();
            localStorage.setItem("authToken", token);

            navigate("/dashboard");
        } catch (err) {
            console.error("Erro Firebase:", err);
            setError(err.message || "Erro ao autenticar. Verifique suas credenciais.");
        }
    };

    return (
        <div className="min-h-screen flex">
            
            <div className="w-full flex items-center justify-center p-8" style={{ 
                backgroundImage: "url('https://img.freepik.com/vetores-premium/ilustracao-de-doodle-de-linha-de-ginasio_1366-1192.jpg?w=740')", 
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
                backgroundSize: 650
                }}>
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        {isRegister ? "Criar Conta" : "Login"}
                    </h2>

                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border rounded-md"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border rounded-md"
                        />
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                            {isRegister ? "Registrar" : "Entrar"}
                        </button>
                    </form>

                    <button
                        onClick={() => setIsRegister(!isRegister)}
                        className="mt-4 text-blue-600 hover:underline w-full text-center"
                    >
                        {isRegister ? "Já tem uma conta? Faça login" : "Não tem conta? Cadastre-se"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
