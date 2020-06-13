class BidsUI {
  constructor() {
    DOMElements.money.textContent = '1000000';
  }

  renderMoney(wonMoney) {
    DOMElements.money.textContent = wonMoney;
  }

  clearBidUI() {
    document.querySelector('.bid-value-1').value = 0;
    document.querySelector('.bid-value-2').value = 0;
    document.querySelector('.bid-value-3').value = 0;
    document.querySelector('.bid-value-4').value = 0;

  }

  showErrorBidMessage() {
    DOMElements.errorBidMessage.classList.add('error-bid-message-active');

    setTimeout(() => {
      DOMElements.errorBidMessage.classList.remove('error-bid-message-active');
    }, 2000)
  }
}

const bidsUI = new BidsUI();