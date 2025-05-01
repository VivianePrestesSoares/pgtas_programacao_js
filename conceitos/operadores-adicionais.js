/*
Operadores Adicionais

-- decremento diminui ou reduz em um o valor de uma variável
++ incremento aumenta um valor na variável


? ternário
*/

//Exemplo Incremento
let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++
console.log(pesoDoDog)

//Exemplo Decremento
let pesoDoTutor = 100
console.log(pesoDotutor)

pesoDoTutor--
console.log(pesoDoTutor)

// Ternário (condicionais)
//condição que se verdadeira vai executar a ação se nao a ação será falso

//{<condicao> ? <acao se verdadeiro> : <acao se falso> }
//const porte =  pesoDodog <= 10 ? 'pequeno' : 'médio'

const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se inf
            ? 'pequeno'   
            : pesoDoDogOperadorTernario <= 20 // senao se / else if
            ? 'médio'
            : 'grande'

console.log(porte)