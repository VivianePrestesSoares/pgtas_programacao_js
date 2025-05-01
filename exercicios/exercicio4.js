// Função para calcular a quantidade diária e duração do estoque
function calcularRacao() {
  // Recebe os dados do usuário
  const nomeDog = 'Cacau'
  const pesoKg = 8
  const estoqueGramas = 1000

  // Cálculo da quantidade de ração diária (30g por kg de peso)
  const racaoPorDia = pesoKg * 30; // gramas por dia

  // Cálculo de quantos dias o estoque vai durar
  const diasDuracao = Math.floor(estoqueGramas / racaoPorDia);

  // Exibe os resultados
  console.log(nomeDog)
  console.log(pesoKg)
  console.log(`Quantidade de ração recomendada por dia: ${racaoPorDia.toFixed(2)}g`);
  console.log(`O estoque atual vai durar aproximadamente: ${diasDuracao} dias`);
}

// Executa a função
calcularRacao();

/* Nova Alternativa
const nome = 'Mel'
const peso = 20
const estoque = 5000

const gramasPordia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome do dog: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Gramas por dia: ${gramasPorDia }`)
console.log(`O estoque vai durar: ${duracaoEstoque}`)

//Alternativa com função 

function calcularconsumoDeRacao(peso, estoque){

const gramasPordia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`-------------------------`)
console.log(`Nome do dog: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Gramas por dia: ${gramasPorDia }`)
console.log(`O estoque vai durar: ${duracaoEstoque}`)

}

calcularCosumoDeRacao('Ada', 1 , 2000)
*/