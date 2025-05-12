import React, { useEffect, useState } from 'react';
import api from '../services/api';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    loadProducts();
  }, []);

  const normalize = (text) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredProducts = products.filter((prod) =>
    normalize(prod.name).includes(normalize(searchTerm)) ||
    normalize(prod.description).includes(normalize(searchTerm))
  );

  return (
    <MainLayout>
      <div className="text-center my-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-2">
          Bem-vindo à nossa loja!
        </h1>
        <p className="text-gray-500 mb-4">Confira os nossos produtos abaixo:</p>

        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
          >
            <div className="w-40 h-60 overflow-hidden flex items-center justify-center bg-gray-100 rounded-md mb-3">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-center">{prod.name}</h2>
            <p className="text-sm text-gray-600 mb-2 text-center">{prod.description}</p>
            <strong className="text-lg text-green-600 mb-2">R$ {prod.price.toFixed(2)}</strong>

            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Home;
