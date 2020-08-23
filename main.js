const usuario = {
    nome: 'Diego',
    idade: 25,
    endereco:{
        cidade: 'Rio Grande do Sul',
        estado: 'SC'
    },
};

const { nome, ...resto } = usuario

console.log(nome, resto);