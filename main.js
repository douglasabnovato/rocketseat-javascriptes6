const usuario = {
    nome: 'Diego',
    idade: 25,
    endereco:{
        cidade: 'Rio Grande do Sul',
        estado: 'SC'
    },
};

const { nome, idade, endereco: { cidade, estado } } = usuario

console.log(nome, idade, cidade, estado);