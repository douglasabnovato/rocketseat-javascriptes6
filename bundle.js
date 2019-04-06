"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// dado o vetor :
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}, {
  nome: 'Danilo',
  idade: 25,
  empresa: 'Rocketseat'
}]; //utilizar os métodos de array (map, reduce, filter e find)

/**
 * 2.1 Utilizando o map : Crie uma variável que contenha todas idades dos usuários: 
 * Resultado : [23, 15, 30]
 */

var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades); //extras

var empresas = usuarios.map(function (usuario) {
  return usuario.empresa;
});
console.log(empresas);
var nomes = usuarios.map(function (usuario) {
  return usuario.nome;
});
console.log(nomes);
/**
 * 2.2 Utilizando o filter :  
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos:
 * Resultado : [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
 */

var rocketseat18 = usuarios.filter(function (usuario) {
  return usuario.empresa === 'Rocketseat' && usuario.idade >= 18;
});
console.log(rocketseat18);
/**
 * 2.3 Utilizando o find : 
 * Crie uma variável que procura por um usuário que trabalhe na empresa Google:
 * Resultado : undefined
 */

var salarioGoogle = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log(salarioGoogle);
/**
 * 2.4 Unindo operações :
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem 
 * no máximo 50 anos:
 * Resultado:
 * [
 *  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 *  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
 * ]
 */

var calculo = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(calculo);
