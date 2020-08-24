# Javascript ES6 

#### Atualização: 19 de agosto de 2020 - 17:00
#### Criação: 01 de abril de 2019
#### Prática : @douglasabnovato

## Ferramentas : 
![Rocketseat](/images/logo-rocketseat.png)
![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![GitHub](/images/logo-github.png)<br/>
![HTML e CSS](/images/logo-html-css.png)
![Javascript](/images/logo-javascript-es6.png)
![Yarn](/images/logo-yarn.png)
![NodeJS](/images/nodejs.png)
![VSCode](/images/logo-VSCode.png)

## Aulas

### SESSÃO 1 - Conceitos

#### Aula 1. Introdução 

- [x] 1.1. Javascript - Ecmascript 6 - ES6
- [x] 1.2. Babel : navegadores entenderem ES6
- [x] 1.3. Webpack : monitora modificações nos arquivos 
- [x] 1.4. classes\
- [x] 1.5. arrow function
- [x] 1.6. desestruturação
- [x] 1.7. rest / spread
- [x] 1.8. import / export
- [x] 1.9. async /await

#### Aula 2. Instalando Node e Yarn

- [x] 2.1. node -v - v12.18.3 (LTS)
- [x] 2.2. yarn -v - v1.21.1 (LTS)

#### Aula 3. Configurando Babel

- [x] 3.1. `yarn init`: `package.json`
- [x] 3.2. Instalar dependência: `yarn add @babel/cli` e `yarn add @babel/preset-env` e `yarn add @babel/core`
- [x] 3.3. Arquivos na pasta node_modules : `.gitignore`
- [x] 3.4. `.babelrc`
- [x] 3.5. arquivos main.js e index.html
- [x] 3.6. `bundle.js` : babel converte js limpo para o navegador entender
- [x] 3.7. `yarn dev` roda a aplicação

#### Aula 4. Classes

- [x] 4.1. Classe TodoList
- [x] 4.2. Método Constructor
- [x] 4.3. Método addTodo
- [x] 4.4. Instanciar a Classe TodoList 
- [x] 4.5. Herança 
- [x] 4.5.1. Herdar uma classe
- [x] 4.5.2. Herdar novos métodos
- [x] 4.5.3. Chamar constructor 
- [x] 4.6. Nova Exemplificação: Método Estático (static)

#### Aula 5. Const e Let

- [x] 5.1. Const 
- [x] 5.1.1. var - pode receber diversos valores do decorrer do tempo do programa 
- [x] 5.1.2. const - uma constante que não pode ter seu valor reatribuído
- [x] 5.1.3. Mutar uma const - alterar o valor dessa const
- [x] 5.2. Let 
- [x] 5.2.1. let - são as variáveis de escopo
- [x] 5.2.2. let é visível apenas dentro da chaves ( {} ), dentro do escopo. 

#### Aula 6. Operações em Array

- [x] 6.1. Array: Percorrer, Filtrar, Encontrar Valor, Manipular
- [x] 6.1.1. Definição de Vetor
- [x] 6.1.2. Função map: percorrer e retornar informação 
- [x] 6.1.3. Index: posição do elemento no vetor, passado como parâmetro
- [x] 6.1.4. Redux: consumir o vetor e transformar em uma informação
- [x] 6.1.5. Filter: testa condição e retorna true ou false
- [x] 6.1.6. Find: verificar se existe/encontrar a informação dentro do array

#### Aula 7. Arrow Function

- [x] 7.1. Array Function: transforma uma função anônima em uma array function

#### Aula 8. Valor padrão

- [x] 8.1. Valor Padrão:inicializar variáveis com valor padrão na definição 
- [x] 8.1.1. em Parâmetros
- [x] 8.1.2. em Array Function

#### Aula 9. Desestruturação

- [x] 9.1. Desestruturação: acessar cada uma das informações da variável
- [x] 9.2. em Funções

#### Aula 10. Operações rest / spread

- [x] 10.1. Operadores Rest e Spread
- [x] 10.1.1. Instalar em forma de plugins: yarn add @babel/plugin-proposal-object-rest-spread
- [x] 10.1.2. Rest: Pegar as outras propriedades
- [x] 10.1.3. Spread: Passar as informações para outra estruturas de dados

#### Aula 11. Template Literals

- [x] 11.1. Template Literals: incluir variáveis dentro do script
- [x] 11.2. Com concatenações
- [x] 11.3. Com template literals

#### Aula 12. Object Short Syntax

- [x] 12.1. Object Short Syntax: o conteúdo for igual ao nome da variável, então, declaramos somente o nome.

#### Desafio 1

- [x] desafio-1.1.1. Crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario". A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

- [x] desafio-1.1.2.
````js
class Usuario{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    isAdmin (){
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, password){
        super(email, password);
        this.admin = true;
    }
}

const Adm1 = new Admin('email@teste.com', 'senha123');
const User1 = new Usuario('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
````

- [x] desafio-1.2.1. Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]. Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]. Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos.

- [x] desafio-1.2.2.
````js
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
````

- [x] desafio-1.3.1. Converta as funções nos seguintes trechos de código em Arrow Functions.

- [x] desafio-1.3.2.
````js
//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
     return item + 10;
});
````
````js
const arr = [1, 2, 3, 4, 5];
console.log(arr);
const soma10 = arr.map(ar => ar + 10);
console.log(soma10);
````
````js
//3.2 
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
     return usuario.idade;
}
mostraIdade(usuario);
````
````js
const usuario = { nome: "Douglas", idade: 29 };
const mostrarIdade = usuario => usuario.idade;
console.log(mostrarIdade(usuario));
````
````js
//3.3
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
     return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
````
````js
const nome = "Douglas";
const idade = 23;
const mostrarUsuario = (nome = "Diego", idade = 18) => ({
    nome,
    idade
});
console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));
````
````js
//3.4
const promise = function() {
     return new Promise(function(resolve, reject) {
         return resolve();
     })
}
````
````js
const promise = () => new Promise((resolve, reject) => resolve());
````

- [x] desafio-1.4.1.1. Desestruturação simples
- [x] desafio-1.4.1.2. 
`````js
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
````

- [x] desafio-1.4.2.1. Desestruturação em parâmetros
- [x] desafio-1.4.2.2. 
````js
//a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente
function mostrarInfo( {nome, idade} ){
    return `${nome} tem ${idade} anos.`;
}
console.log(mostrarInfo({nome: "Diego", idade: 25}));
````

- [x] desafio-1.5.

- [x] desafio-1.6.

- [x] desafio-1.7.

### SESSÃO 2 - Webpack Server

#### Aula 13. Configurando Webpack
- instalação webpack: `yarn add webpack webpack-cli -D`
- arquivo que lista dependências: `webpack.config.js`
- identificação das dependencias: `"webpack": "^4.30.0"` e `"webpack-cli": "^3.3.0"`
- instalação babel loader: `yarn add babel-loader -D`
- identificação das dependencias: `"babel-loader": "^8.0.5"`

#### Aula 14. Import / Export
- maneiras de declação do import
- maneiras de declaração do export

#### Aula 15. Webpack dev server
- organizar estrutura de pastas
- instalar Webpack dev server : ` yarn add webpack-dev-server -D`
- monitorar as alterações em projeto e realizar um refresh no servidor para exibir.

#### Desafio.
- Finalizados.

### SESSÃO 3 - Async / Await

#### Aula 16. Async / Await
- requisições acíncronas.
- criação de promise.

#### Aula 17. Configurando Axios
- instalar dependência `yarn add axios`
- try catch para tratar erro.

#### Desafio.
- Finalizados.

### SESSÃO 4 - Aplicação com ES6+

#### Aula 18. Estrutura e estilos
- HTML
- CSS

#### Aula 19. Adicionar repositórios
- class App no arquivo main.js.

#### Aula 20. Render em tela
- criar o método render para exibir os elementos (repositórios) em tempo real ao ser adicionados.

#### Aula 21. Buscando API
- configurando a API para usar no projeto
- usar os elementos da API para alimentar o projeto com os repositórios reais.
- elementos deixarão de ser estáticos e se tornarão dinâmicos.
1. instalar e configurar axios

#### Aula 22. Loading e error
- loading message
- error message

:. Do curso ´Javascript ES6´ da Rocketseat.
Por Diego Fernandes.