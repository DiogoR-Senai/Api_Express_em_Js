const express = require("express");
const cors = require("cors");
const app = express();

// Middleware para permitir que o Express entenda JSON no corpo (body) das requisições
app.use(express.json());
app.use(cors());

// Nosso "Banco de Dados" em memória
let usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
];

// --- ROTAS CRUD ---

// 1. READ (Listar todos)
app.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});

// 2. CREATE (Adicionar novo)
let proximoId = 3;

app.post("/usuarios", (req, res) => {
  const novoUsuario = {
    id: proximoId, // Usamos o contador atual
    nome: req.body.nome,
  };
  console.log(req.body);
  usuarios.push(novoUsuario);
  proximoId++; // Aumentamos o contador para o próximo não repetir

  res.status(201).json(novoUsuario);
});

// 3.  UPDATE (Atualizar)
app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const index = usuarios.findIndex((u) => u.id === parseInt(id));

  if (index !== -1) {
    usuarios[index].nome = nome;
    res.json(usuarios[index]);
  } else {
    res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
});

// 4. DELETE (Remover)
app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuarios = usuarios.filter((u) => u.id !== parseInt(id));
  res.status(204).send(); // 204 significa "Sem conteúdo", sucesso na exclusão
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
