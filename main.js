const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    { nome: 'Danilo', idade: 25, empresa: 'Rocketseat' },
];

/** map */
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);
const empresas = usuarios.map(usuario => usuario.empresa);
console.log(empresas);
const nomes = usuarios.map(usuario => usuario.nome);
console.log(nomes);

/** filter */
const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);
console.log(rocketseat18);

/** find */
const salarioGoogle = usuarios.find(
    usuario => usuario.empresa === 'Google'
);
console.log(salarioGoogle);

/** Unindo operações */
const calculo = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50
);
console.log(calculo);