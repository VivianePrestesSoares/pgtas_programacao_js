/**
 tentar executar a conexão com banco, se der certo beleza, se der errado deve retornar um erro

 tentar{
 //conexao com banco (exemplo)
 } pegar (erro/excecao) {
  //salvar a excecao em algum lugar...
  //exibir}

  lançar um erro = throw


 */

  try {
    console.log(`Tentando alimentar o Pet`)
  } catch (excecao){
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

  } finally {
    console.log(`Sempre ser EXECUTADO`)
    
  }
