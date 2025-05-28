import { listaDeCaes } from './exercicio10-dados-de-teste.js'

function entregarPetiscos(listaDeDogs) {
  listaDeDogs.forEach(listaDeCaes => {
    console.log(`Entregando petisco para ${listaDeCaes}`)
  })
}

entregarPetiscos(listaDeCaes)