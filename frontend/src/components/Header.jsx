import { useAuth } from "../context/AuthContext";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth() ?? {};

  return (
    <header className="w-full bg-white shadow-md p-4 flex items-center justify-between">
      
      <div className="flex items-center space-x-2">
        <img 
        src="https://www.clipartmax.com/png/middle/104-1048988_protein-powder-coloring-page-ultra-coloring-pages-black-protein-powder-coloring-page.png" 
        alt="Logo" className="h-12" />
        <span className="text-2xl font-bold text-blue-600">Monster Project</span>
      </div>

      <div className="flex items-center space-x-6">
        {user ? (
          <>
            <span className="text-gray-700 font-medium">Olá, {user.displayName || 'Usuário'}</span>
            <button
              onClick={logout}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Sair
            </button>
          </>
        ) : (
          <Link to="/login" className="text-gray-700 hover:text-blue-500 font-medium">
            Login
          </Link>
        )}

        {/* Carrinho */}
        <Link to="/carrinho" className="relative">
          <FaShoppingCart size={24} className="text-gray-700 hover:text-blue-500" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </Link>

        {/* Botão adicionar produto (só para usuários logados) */}
        {user && (
          <a 
          href="/admin/produtos"
          target="_blank">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
              Adicionar Produto
            </button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
