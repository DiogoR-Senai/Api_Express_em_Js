const express = require("express");
const cors = require("cors");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Serve os arquivos da pasta public (seu index.html)
app.use(express.static("public"));

// Prefixo das rotas de usuário
app.use("/usuarios", usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor MVC rodando em http://localhost:${PORT}`);
});
