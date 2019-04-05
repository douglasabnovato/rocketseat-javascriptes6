//spread
const usuario1 = {
    nome : 'Diego',
    idade : 23,
    empresa : 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'João' };

console.log(usuario2);