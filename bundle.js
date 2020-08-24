"use strict";

var empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio de Janeiro",
    estado: "SC"
  }
}; //desestruturação para transformar as propriedades nome, cidade e estado em variáveis

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); //a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente

function mostrarInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostrarInfo({
  nome: "Diego",
  idade: 25
}));
