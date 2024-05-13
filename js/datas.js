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
      nomeMes = 'Jan';
      return nomeMes;
    case 1:
      nomeMes = 'Fev';
      return nomeMes;
    case 2:
      nomeMes = 'Mar';
      return nomeMes;
    case 3:
      nomeMes = 'Abr';
      return nomeMes;
    case 4:
      nomeMes = 'Mai';
      return nomeMes;
    case 5:
      nomeMes = 'Jun';
      return nomeMes;
    case 6:
      nomeMes = 'Jul';
      return nomeMes;
    case 7:
      nomeMes = 'Ago';
      return nomeMes;
    case 8:
      nomeMes = 'Set';
      return nomeMes;
    case 9:
      nomeMes = 'Out';
      return nomeMes;
    case 10:
      nomeMes = 'Nov';
      return nomeMes;
    case 11:
      nomeMes = 'Dez';
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