import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const EditarProduto = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ nome: "", descricao: "", preco: "", imagem: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setForm({
          nome: res.data.name || "",
          descricao: res.data.description || "",
          preco: res.data.price || "",
          imagem: res.data.image || ""
        });
      } catch (err) {
        alert("Erro ao carregar produto.");
        console.error(err);
      }
    };

    fetchProduto();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.descricao || !form.preco || !form.imagem) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      await api.put(`/products/${id}`, {
        nome: form.nome,
        descricao: form.descricao,
        preco: parseFloat(form.preco),
        imagem: form.imagem
      });

      navigate("/admin/produtos");
    } catch (err) {
      alert("Erro ao atualizar produto.");
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" className="w-full p-2 border rounded" />
        <input name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" className="w-full p-2 border rounded" />
        <input name="preco" type="number" step="0.01" value={form.preco} onChange={handleChange} placeholder="Preço" className="w-full p-2 border rounded" />
        <input name="imagem" value={form.imagem} onChange={handleChange} placeholder="URL da Imagem" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarProduto;
