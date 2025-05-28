/**
 Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.
 Use a estrutura de repetição for contado.

 Exiba:
 - Cada vez que um petisco for entregue
 - Quando o dog estiver satisfeito (que é quando terminar os petiscos)

 Extra: transaforme a lógica em uma função 
 */

let quantidadeDePetiscos = 3

for (let i = 1; i <= quantidadeDePetiscos; i++) {
 
  console.log(`Entregando petisco ${i}`);
}
  console.log("O dog está satisfeito!")

console.log(`--------------`)

const quantidadePetiscosDisponiveis = 4

for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++){
  console.log(`Dando o petisco de nº ${petisco} para a Cacau`)
}

console.log(`Satisfeito, chega de petiscos por hoje!`)