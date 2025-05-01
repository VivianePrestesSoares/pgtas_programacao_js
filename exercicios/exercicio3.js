/*Exemplos:
mínimo = 2

idade 1 + porte M = não pode ser adotado
idade 2 + porte M = sim pode pela idade
idade 2 + porte P = sim pela idade
idade 1 + porte P = sim pelo porte



const nome = 'Cacau'
const idade = 8
const porte = 'P'

const idadeMinima = 2

//const adocao = idade < 2 ? 'não' : 'sim'
const adocao = idade < idadeMinima || porte === 'P'
             ? 'sim' 
             : porte === 'P'
             ? 'sim'
             : 'nao'

 const adocaov2 = idade >= idadeMinima || porte === 'P'
 console.log(adocao)
 console.log(adocaov2)
*/
 //Outra opção

const nome = 'Ada'
const idade = 0
const porte = 'P'

const idadeMinima = 2

const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(adocao)
console.log(adocaov2)

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

  // return adocao
  console.log(adocao)
}

// idade 1 + porte M = nao
// idade 2 + porte M = sim, pela idade
// idade 2 + porte P = sim, pela idade
// idade 1 + porte P = sim, pelo porte

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')