/**
 * Console API
 */

console.log('Aula inicial JS');
console.error('Falha na execução');
console.warn('Atenção');
console.table([
  {
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS',
  },
  {
    nome: 'Viviane',
    turma: '02',
    disciplina: 'Prog JS',
  },
]);

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

//Informaões de um dog que não mudam
const nome = 'Cacau';
const raca = 'Linguicinha';
const sexo = 'Femea';
const cor = 'Caramelo';
const dataDeNascimento = '06/02/2017';
const porte = 'P';

// Informações que mudam

let idade = 8; //Number
let peso = 5.6; //Number
let vacinado = true; // boolean
let castrado = true; //boolean
let tamanho = 'P'; // String

//hoisting - içamento ou elevação

const irmaos = [
  {
    nome: 'Thor',
    idade: 2,
  },
  {
    nome: 'Hela',
    idade: 3,
  },
];
console.table(irmaos);

const valor = '42';
console.log(valor);

const numeroAula = '03';
const turma = '02';
let data = '05 de Abril';

console.log('Aula 03 da turma ' + turma + ' no sábado dia 05 de Abril');
console.log(`Aula ${numeroAula} da Turma ${turma} no Sábado dia ${data}`);

console.log(numeroAula.length);

const nomesDealunos = 'Giuliana André Goku Lucas Lenilson';

const nomesDeAlunosSplit = nomesDealunos.split(' ');

console.log(nomesDeAlunosSplit);

console.log(nomesDealunos.toLowerCase());
console.log(nomesDealunos.toUpperCase());

console.log(nomesDealunos.includes('Dennys'));

console.log(nomesDealunos.replaceAll('a', 'i'));

const conceitosLogica =
  '              inteiro real cadeia de caracteres...            ';
console.log(conceitosLogica.trim());

let dataParaCortar = '05 de Abril';

console.log(dataParaCortar.slice(0, 2));
