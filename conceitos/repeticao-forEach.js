/**
 
listaDeAlunos
  Matheus
  Renata
  Leandro
  Ana
  Lucas

  paraCada (item da) listaDeAlunos
    //dar uma nota aleatória

   */

    const listaDeAlunos = [
      'Matheus',
      'Renata',
      'Leandro',
      'Ana',
      'Lucas'
    ]

    listaDeAlunos.forEach(aluno => {
      console.log(aluno)
    })

    const listaDeAlunosENotas = [
      {
        nome: 'Matheus',
        nota: 7
      },
      {
        nome: 'Renata',
        nota: 8
      },
      {
        nome:'Leandro',
        nota: 6
      }      
    ]

    listaDeAlunosENotas.forEach(aluno =>{
      console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
    })

console.log(`------------`)

listaDeAlunosENotas.forEach(aluno => {
  if (aluno.nota < 7) {
    console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
  }
    console.log( `O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})