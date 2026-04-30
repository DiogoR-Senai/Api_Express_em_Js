// Movido do app.js original
let usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
];
let proximoId = 3;

module.exports = {
  listarTodos: () => usuarios,
  
  criar: (nome) => {
    const novoUsuario = { id: proximoId++, nome };
    usuarios.push(novoUsuario);
    return novoUsuario;
  },

  atualizar: (id, nome) => {
    const index = usuarios.findIndex((u) => u.id === parseInt(id));
    if (index !== -1) {
      usuarios[index].nome = nome;
      return usuarios[index];
    }
    return null;
  },

  deletar: (id) => {
    const inicialLength = usuarios.length;
    usuarios = usuarios.filter((u) => u.id !== parseInt(id));
    return usuarios.length !== inicialLength;
  }
};