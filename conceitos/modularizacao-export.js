/**
 Sintaxe CommonJS:
  module.exports = {} / require ('')

  ESM - Ecmascript Standard modules
    export  {} / import
    
 */

    function exibirNomePet(paramNomePet) {
      console.log(`O nome do pet é ${paramNomePet}`)
    }

    exibirNomePet(`Pipoca`)
    exibirNomePet(`Pantera`)
    exibirNomePet(`Peggy`)

   // export {}/ import
    export {
    exibirNomePet
   } 