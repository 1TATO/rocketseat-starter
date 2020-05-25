// EXERCICIO 1
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

const { rua, numero, bairro, cidade, uf } = endereco;

console.log(`O usuario mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº${numero}`);

//-------------------------------------------------------------------------------------------------------

//EXERCICIO 2
function pares(x, y) {
  for (var i = x; i <= y; i++){
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

pares(0, 10);

//-------------------------------------------------------------------------------------------------------

//EXERCICIO 3
function temHabilidade(skills) {
  if (skills.indexOf('Javascript') !== -1) {
    console.log('true');
  }
  else {
    console.log('false');
  }
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); 

//-------------------------------------------------------------------------------------------------------

//EXERCICIO 4
function experiencia(anos) {
  if (anos >= 0 && anos <= 1) {
    console.log('Iniciante');
  }
  else if (anos >= 1 && anos <= 3) {
    console.log('Intermediario');
  }
  else if (anos >= 3 && anos <= 6) {
    console.log('Avancado');
  }
  else {
    console.log('Jedi Master');
  }
}

var anosEstudo = 7;
experiencia(anosEstudo);

//-------------------------------------------------------------------------------------------------------

//EXERCICIO 5
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

for (const user of usuarios) {
  const { nome, habilidades } = user;
  console.log(`O ${nome} possui as habilidades: ${habilidades.join(', ')}`);
};