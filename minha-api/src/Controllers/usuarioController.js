const usuarioModel = require("../models/usuarioModel");

exports.getAll = (req, res) => {
  res.status(200).json(usuarioModel.listarTodos());
};

exports.create = (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome é obrigatório" });

  const novo = usuarioModel.criar(nome);
  res.status(201).json(novo);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const atualizado = usuarioModel.atualizar(id, nome);

  if (atualizado) res.json(atualizado);
  else res.status(404).json({ mensagem: "Usuário não encontrado" });
};

exports.delete = (req, res) => {
  const sucesso = usuarioModel.deletar(req.params.id);
  if (sucesso) res.status(204).send();
  else res.status(404).json({ mensagem: "Usuário não encontrado" });
};
