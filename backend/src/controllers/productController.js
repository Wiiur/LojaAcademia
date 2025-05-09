const { Product } = require("../models")

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nome, preco, descricao, imagem } = req.body;

    // Verifica se todos os campos foram enviados
    if (!nome || !preco || !descricao || !imagem) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const product = await Product.create({
      name: nome,
      price: preco,
      description: descricao,
      image: imagem,

    });

    res.status(201).json(product);

  } catch (error) {
    console.error("Erro ao criar produto:", error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};



const updateProduct = async (req, res) => {
  try {
    const { name, price, description, stock, category, image } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    await product.update({ name, price, description, stock, category, image });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    await product.destroy();
    res.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
