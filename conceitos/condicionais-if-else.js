/**
 condição

 Se for verdadeira ação dentro do if
 Se não for ação dentro do else

 senao se (outra condição) dentro do if

 */

 if(10 > 5) {
  console.log(`Valor é maior`)
   } else {
    console.log(`Valor é menor`)
   }

   const idade = 3
   const porte = 'P'

   if (idade >= 2) {
    console.log(`Pode ser adotado, pela idade`)
   } else if (porte === 'P') {
    console.log(`Pode ser adotado, pelo porte`)
   } else{
    console.log (`Não pode ser adotado`)
   }