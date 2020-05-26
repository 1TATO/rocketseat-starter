const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// MAP
const map = usuarios.map(user => user.idade)

console.log(map);

// FILTER
const filter = usuarios.filter(user => user.idade > 18 && user.empresa == 'Rocketseat');

console.log(filter);

// FIND
const find = usuarios.find(user => user.empresa == 'Google');

console.log(find);

// UNINDO OPERACOES
// usando spread pra mudar somente um valor de cada objeto
const multiplicaIdade = usuarios.map(user => ({
  ...user, idade: user.idade * 2
})).filter(({idade}) => idade <= 50);

console.log(multiplicaIdade);