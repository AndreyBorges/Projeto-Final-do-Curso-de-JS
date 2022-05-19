export default function initFuncionamento() {
  const funcionamentoDia = document.querySelector('[data-semana]')
  const diasDaSemana = funcionamentoDia.dataset.semana.split(',').map(Number)
  const funcionamentoHora = funcionamentoDia.dataset.horario.split(',').map(Number)
  const diaAgora = new Date().getDay()
  const horaAgora = new Date().getHours()
  const diaUtil = diasDaSemana.indexOf(diaAgora) !== -1
  const horaUtil = horaAgora >= funcionamentoHora[0] && horaAgora < funcionamentoHora[1]

  diaUtil && horaUtil ? funcionamentoDia.classList.add('opening') : funcionamentoDia.classList.add('closed')

  

  // console.log(diaUtil)
  // console.log(horaUtil)
  
  
  // console.table(diasDaSemana)
  // console.table(funcionamentoHora)
  // console.log(diaAgora)
  // console.log(horaAgora)




}

// const agora = new Date();
// agora;
// // Semana Mês Dia Ano HH:MM:SS GMT
// agora.getDate() // Dia
// agora.getDay() // Dia da Semana ex: 5 = Fri
// agora.getMonth() // Número dia mês
// agora.getFullYear() // Ano
// agora.getHours() // Hora
// agora.getMinutes() // Minutos
// agora.getTime() // ms desde 1970
// agora.getUTCHours() - 3 // Brasília

// const agora = new Date();
// agora.getTime(); //

// // total de dias desde 1 de janeiro de 1970
// const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);

// const agora = new Date();
// const promocao = new Date('December 24 2018 23:59');

// function converterEmDias(time) {
//   return time / (24 * 60 * 60 * 1000);
// }

// const diasAgora = converterEmDias(agora);
// const diasPromocao = converterEmDias(promocao);

// const faltam = diasPromocao - diasAgora;
