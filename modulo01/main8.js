
const usuario = {
    nome : 'Douglas',
    idade : 23,
    endereco : {
        cidade : 'São Paulo',
        estado : 'SP',
    },
};

/**
 * Recuperar informações do objeto :
 * const nome = usuario.nome;
 * const idade = usuario.idade;
 * const cidade = usuario.endereco.cidade;
 */

//desestruturação do objeto
const{nome, idade} = usuario;
console.log(nome);
console.log(idade);

// o mesmo se aplica para parâmetros de funções