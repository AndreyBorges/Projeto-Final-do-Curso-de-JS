export default function initFuncionamento() {
  const funcionamentoDia = document.querySelector('[data-semana]')
  const diasDaSemana = funcionamentoDia.dataset.semana.split(',').map(Number)
  const funcionamentoHora = funcionamentoDia.dataset.horario.split(',').map(Number)
  const diaAgora = new Date().getDay()
  const horaAgora = new Date().getHours()
  const diaUtil = diasDaSemana.indexOf(diaAgora) !== -1
  const horaUtil = horaAgora >= funcionamentoHora[0] && horaAgora < funcionamentoHora[1]

  diaUtil && horaUtil ? funcionamentoDia.classList.add('opening') : funcionamentoDia.classList.add('closed')
}
