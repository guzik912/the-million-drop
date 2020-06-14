class BidsUI {
  constructor() {
    DOMElements.money.textContent = numeral('1000000').format('0,0,0') + '$';
  }

  renderMoney(wonMoney) {
    DOMElements.money.textContent = numeral(wonMoney).format('0,0,0') + '$';
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