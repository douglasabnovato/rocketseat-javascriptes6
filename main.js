
const empresa = {
    nome: "Rocketseat",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "SC",
    }
};
//desestruturação para transformar as propriedades nome, cidade e estado em variáveis
const {nome, endereco:{cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

//a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente
function mostrarInfo( {nome, idade} ){
    return `${nome} tem ${idade} anos.`;
}
console.log(mostrarInfo({nome: "Diego", idade: 25}));

