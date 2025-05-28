/**
 
describe -> equivale a um agrupador de testes (bloco que tem o título do teste que recebe uma função)
it -> é a implementação do teste

TDD
  crio o teste
  vejo o teste falhar
  crio a implementação para o teste passar
  rodo o teste denovo
  refatoro o código para melhorar..

  Assertion/Asserção
  Verificar se um comportamento está de acordo om o esperado

 */

  import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
  import assert from 'node:assert'

describe('Testes do Projeto', () => {

  it(`deve exibir o nome do dog com letras maiúsculas`, () => {
    assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA') 
    // verifique se: valor atual é IGUAL a <valor esperado>
  })

  it('primeiro teste', () => {

  })

  it('segundo teste', () => {
    throw new Error()
  })

})