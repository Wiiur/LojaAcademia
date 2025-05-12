const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/Routes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config({ path: "../../.env" });

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", userRoutes);          
app.use("/api/products", productRoutes);

const sequelize = require("./config/database");

sequelize.sync()
  .then(() => {
    console.log("Banco de dados sincronizado");

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar banco de dados:", err);
  });
