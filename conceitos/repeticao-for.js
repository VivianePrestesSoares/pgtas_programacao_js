/**
 para, faca
 contador; condição;manipulação do contador (incremento/decremento)

 quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadedePetiscos++

 */
const quantidadeCalculada = 3;
for (
  let quantidadeDePetiscos = 1;
  quantidadeDePetiscos <= quantidadeCalculada;
  quantidadeDePetiscos++
) {
  //acao de dar um petisco
  console.log(`Dando o petisco de nº${quantidadeDePetiscos}`);
}

// Exemplo 2 de for

const gatos = ['Lessie', 'Pony', 'Fumaça'];

for (let indice = 0; indice < gatos.length; indice++) {
  console.log(`Dando o Petisco para ${gatos[indice]}`);
}
