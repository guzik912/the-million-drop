class ResultsUI {
  renderQuestionResults(bid, number) {
    DOMElements.resultIcon[number].textContent = '';
    DOMElements.resultIcon[number].innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    DOMElements.resultMoney[number].textContent = '- ' + numeral(bid).format('0,0,0') + '$';
  }

  clearResultsUI() {
    DOMElements.resultIcon.forEach(element => {
      element.textContent = '?';
      element.innerHtml = '';
    })

    DOMElements.resultMoney.forEach(element => element.textContent = '');
  }

  showQuestionTurnResultMessage(lostMoney, leftMoney){
    DOMElements.turnQuestionResultMessage.classList.add('turn-question-result-message-active');
    DOMElements.resultMessageLostMoney.textContent = numeral(lostMoney).format('0,0,0') + '$';
    DOMElements.resultMessageLeftMoney.textContent = numeral(leftMoney).format('0,0,0') + '$';

    setTimeout(() => {
      DOMElements.turnQuestionResultMessage.classList.remove('turn-question-result-message-active');
    }, 4000)
  }

  showFinalResultMessage(wonMoney, playerName) {
    DOMElements.finalResultMessage.classList.add('final-result-message-active');
    DOMElements.finalMoney.textContent = numeral(wonMoney).format('0,0,0');
    DOMElements.playerNameText.textContent = playerName.charAt(0).toUpperCase() + playerName.slice(1);
  }
}

const resultsUI = new ResultsUI();