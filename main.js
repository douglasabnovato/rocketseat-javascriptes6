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

const arr1 = [4,5,6];
const arr2 = [1,2,3];

const arr3 = [...arr1, ...arr2];

console.log(arr3);