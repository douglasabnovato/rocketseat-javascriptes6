// rest 

const usuario1 = {
    nome : 'Diego',
    idade : 23,
    empresa : 'Rocketseat'
};

const { nome, ... resto } = usuario1;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const [a,b, ... c] = arr;

console.log(a);
console.log(b);
console.log(c);
 