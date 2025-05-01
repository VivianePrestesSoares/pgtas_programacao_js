const nome = 'cacau', raca = 'linguicinha';
let idade = 8, peso = 5.6,  adotado = false;

const tagDeIdentificacao = [
  {
    Nome: 'cacau',
    Raca: 'linguicinha',
    Peso: 5.6,
  },
];

console.table(tagDeIdentificacao);
console.log('Nome:', nome.toUpperCase());
console.log('Raca:', raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase(),
);
console.log('Peso:', peso);

let nomeUpperCase = nome.toUpperCase();
