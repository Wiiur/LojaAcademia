// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");



router.post("/", createProduct);// Rota para cadastrar produto

router.get("/", getAllProducts);// Rota para listar todos os produtos

router.get("/:id", getProductById);// Rota para buscar um produto pelo ID

router.put("/:id", updateProduct);// Rota para atualizar um produto

router.delete("/:id", deleteProduct);// Rota para deletar um produto

module.exports = router;
