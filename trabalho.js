// Teste 1: geradorDeTagsDeIdentificação

const tagDeIdentificacao = 'Pantera';

function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Teste 2: verificarSePodeSerAdotado

const idade = 1;
const porte = 'M';

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade == 1 || porte === 'M';

  return adocao;
}


//Teste 3: calcularConsumoDeRacao

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// Teste 4: decidirTipoDeAtividadePorPorte

function decidirTipoDeAtividadePorPorte(porteInformado) {
  let atividade;

  switch (porteInformado) {
    case 'pequeno':
      atividade = `brincar dentro de casa`;
      break;
    case 'médio':
      atividade = `brincar no quarteirão`;
      break;
    case 'grande':
      atividade = `correr no parque`;
      break;
    default:
      atividade = `porte inválido`
  }

  return atividade;
}

//Teste 5: buscarDadoAsync

async function buscarDadoAsync() {
  return 'Pipoca';
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}
