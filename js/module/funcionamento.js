export default class Funcionamento {
  constructor(elm, open, close) {
    this.funcionamentoDia = document.querySelector(elm);
    this.open = open;
    this.close = close;
  }

  dadosFuncionamento() {
    this.diasDaSemana = this.funcionamentoDia.dataset.semana
      .split(",")
      .map(Number);
    this.funcionamentoHora = this.funcionamentoDia.dataset.horario
      .split(",")
      .map(Number);
  }

  dataAgora() {
    this.diaAgora = new Date().getDay();
    this.horaAgora = new Date().getUTCHours() - 3;
  }

  aberto() {
    this.diaUtil = this.diasDaSemana.indexOf(this.diaAgora) !== -1;
    this.horaUtil =
      this.horaAgora >= this.funcionamentoHora[0] &&
      this.horaAgora < this.funcionamentoHora[1];
    return this.diaUtil && this.horaUtil;
  }

  ativaAberto() {
    this.aberto()
      ? this.funcionamentoDia.classList.add(this.open)
      : this.funcionamentoDia.classList.add(this.close);
  }

  init() {
    this.funcionamentoDia
      ? (this.dadosFuncionamento(), this.dataAgora(), this.ativaAberto())
      : null;
    return this;
  }
}
