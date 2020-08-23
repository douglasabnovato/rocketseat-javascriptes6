"use strict";

var usuario = {
  nome: 'Diego',
  idade: 25,
  endereco: {
    cidade: 'Rio Grande do Sul',
    estado: 'SC'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome, idade, cidade, estado);
