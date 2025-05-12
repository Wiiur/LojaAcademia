import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";


const AdminProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const fetchProdutos = async () => {
    const res = await api.get("/products");
    setProdutos(res.data);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/products", {
        nome: form.name,
        descricao: form.description,
        preco: parseFloat(form.price),
        imagem: form.image,
      });

      setForm({ name: "", description: "", price: "", image: "" });
      fetchProdutos();
    } catch (err) {
      alert("Erro ao cadastrar produto.");
      console.error(err);
    }
  };

  const deletarProduto = async (id) => {
    if (window.confirm("Deseja realmente deletar este produto?")) {
      await api.delete(`/products/${id}`);
      fetchProdutos();
    }
  };

  return (

    <div className="p-6 max-w-5xl mx-auto">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Gerenciar Produtos</h1>

      <div className="bg-white shadow-md rounded p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center">Adicionar Novo Produto</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" className="p-2 border rounded" />
          <input name="description" value={form.description} onChange={handleChange} placeholder="Descrição" className="p-2 border rounded" />
          <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Preço" className="p-2 border rounded" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="URL da Imagem" className="p-2 border rounded" />
          <button type="submit" className="md:col-span-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Cadastrar</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <div key={p.id} className="w-100 h-150 border rounded p-4 shadow bg-white">
            <div className="w-50 h-70 overflow-hidden flex items-center justify-center bg-gray-100 rounded-md mb-3">
              <img 
              src={p.image} 
              alt={p.name}  
              className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-gray-700">{p.description}</p>
            <p className="text-green-700 font-semibold mt-2">R$ {p.price.toFixed(2)}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/admin/produtos/${p.id}/editar`} className="text-blue-600 hover:underline">Editar</Link>
              <button onClick={() => deletarProduto(p.id)} className="text-red-600 hover:underline">Excluir</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AdminProdutos;
