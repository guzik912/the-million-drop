class bidsUI {
  renderMoney(wonMoney) {
    DOMElements.money.textContent = wonMoney;
  }

  clearBidUI() {
    DOMElements.bidValue1.value = 0;
    DOMElements.bidValue2.value = 0;
    DOMElements.bidValue3.value = 0;
    DOMElements.bidValue4.value = 0;
  }
}