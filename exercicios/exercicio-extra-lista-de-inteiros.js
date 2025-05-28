/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings
*/

const listaOriginal = [1, 'texto', 2, 'outro texto', 3, 4.5, 5, '6', 7, 8.88];
const listaFiltrada = filtrarInteiros(listaOriginal);

function filtrarInteiros(lista) {
  
  return lista.filter(item => typeof item === 'number' && Number.isInteger(item));
}

console.log("listaFiltrada", listaFiltrada); 
