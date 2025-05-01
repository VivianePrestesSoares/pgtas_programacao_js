
const nome = 'Cacau'
const peso = 5.5
const porte = peso <= 10 ? 'pequeno' : 'médio' 

console.log(`---------`)
console.log(`Nome ${ nome}`)
console.log(`Peso ${ peso}`)
console.log(`Porte ${ porte}`)
console.log(`---------`)

//Alternativa com a função Extra

function classificarPortePorPeso(nome, peso){

const porte = peso <= 10 ? 'pequeno' : 'médio' 

console.log(`---------`)
console.log(`Nome ${ nome}`)
console.log(`Peso ${ peso}`)
console.log(`Porte ${ porte}`)
console.log(`---------`)
}

classificarPortePorPeso ('Pantera', 14.5)
classificarPortePorPeso ('Cacau', 8)
classificarPortePorPeso ('Bob', 50)