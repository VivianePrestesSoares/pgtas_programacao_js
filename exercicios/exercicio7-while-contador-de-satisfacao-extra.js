function verificarSeEstaSatisfeito() {
  let voltasParaDogFicarSatisfeito = 5;
  let volta = 0;

  while (volta <= voltasParaDogFicarSatisfeito) {
    console.log(`A Cacau está dando a volta nº ${volta}`);
    console.log(`A Cacau está satisfeita após 5 voltas!`);

    volta++;
  }
  console.log(`Acabou o passeio, Cacau!`);
}

verificarSeEstaSatisfeito();
