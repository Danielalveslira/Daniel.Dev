const time = document.querySelector('#time');
time.innerHTML = 'Mudando o texto';
const data = new Date();
function getdiaSemana(diaSemana) {
  let diaSemanaTexto
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      break;
    case 1:
      diaSemanaTexto = 'Segunda-feira';
      break;
    case 2:
      diaSemanaTexto = 'Terça-feira';
      break;
    case 3:
      diaSemanaTexto = 'Quarta-feira';
      break;
    case 4:
      diaSemanaTexto = 'Quinta-feira';
      break;
    case 5:
      diaSemanaTexto = 'Sexta';
      break;
    case 6:
      diaSemanaTexto = 'Sabado';
      break;
    default:
      diaSemanaTexto = '';
  }
  return diaSemanaTexto;
}

function getNomeMes(numeroMes) {
  let nomeMes;

  switch (numeroMes) {
    case 0:
      nomeMes = 'Janeiro';
      return nomeMes;
    case 1:
      nomeMes = 'Fevereiro';
      return nomeMes;
    case 2:
      nomeMes = 'Março';
      return nomeMes;
    case 3:
      nomeMes = 'Abril';
      return nomeMes;
    case 4:
      nomeMes = 'Maio';
      return nomeMes;
    case 5:
      nomeMes = 'Junho';
      return nomeMes;
    case 6:
      nomeMes = 'Julho';
      return nomeMes;
    case 7:
      nomeMes = 'Agosto';
      return nomeMes;
    case 8:
      nomeMes = 'Setembro';
      return nomeMes;
    case 9:
      nomeMes = 'Outubro';
      return nomeMes;
    case 10:
      nomeMes = 'Novembro';
      return nomeMes;
    case 11:
      nomeMes = 'Dezembro';
      return nomeMes;

  }
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getdiaSemana(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return `${nomeDia}, ${data.getDate()} de ${nomeMes}`
}
time.innerHTML = criaData(data)