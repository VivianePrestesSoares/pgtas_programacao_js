/**
 Crie um script que avise quando o dog já passeou o suficiente. Para sber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltar na quadra.

 Use a estrutura de repetição While

 Exiba:
 - Qual o número da volta atual
 - quando o dog estiver satisfeito
 */

let voltas = 1;
while (voltas <= 5) {
  console.log(`O dog está dando a volta nº ${voltas}`);
  voltas++;
}
console.log(`O dog está satisfeito após 5 voltas!`);

//Exemplo 2
console.log(`----------------`)

let voltasParaDogFicarSatisfeito = 5
let volta = 1

while(volta <= voltasParaDogFicarSatisfeito) {
  console.log(`Volta de nº ${volta} com a Cacau`)

  volta++
}

console.log(`Acabou o passeio, Cacau!`)
