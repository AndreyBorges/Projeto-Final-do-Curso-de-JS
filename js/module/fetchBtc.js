export default function initFetchBtc(url,target) {
  async function fetchBtc() {
    try {
      const btcResp = await fetch(url);
      const bitcoinJson = await btcResp.json();
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = `R$ ${(1000 / bitcoinJson.BRL.sell).toFixed(4)}`;
    } catch (error) {
      btcPreco.innerText = `Erro ao buscar o valor do BitCoin`;
      console.log(error);
    }
  }

  fetchBtc(url);
}
