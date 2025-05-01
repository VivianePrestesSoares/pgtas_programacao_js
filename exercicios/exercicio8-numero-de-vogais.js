/**
 Retorne o número de vogais no texto fornecido. consideraremos a, e, i, o e u como vogais para este kata.
 O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
Letras acentuadas não fazem parte desse desafio.

Texto: turma 

 */


console.log('numeroDeVogais:', contarVogais('df'));
console.log('numeroDeVogais:', contarVogais(' turma dois '));

function contarVogais(texto) {

  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

