class BidsUI {
  constructor() {
    DOMElements.money.textContent = '1000000';
  }

  renderMoney(wonMoney) {
    DOMElements.money.textContent = wonMoney;
  }

  clearBidUI() {
    DOMElements.bidValueInputs.forEach(input => input.value = 0);
  }

  showErrorBidMessage() {
    DOMElements.errorBidMessage.classList.add('error-bid-message-active');

    setTimeout(() => {
      DOMElements.errorBidMessage.classList.remove('error-bid-message-active');
    }, 2000)
  }
}

const bidsUI = new BidsUI();