class ResultsUI {
  renderQuestionResults(bid, number) {
    DOMElements.resultIcon[number].textContent = '';
    DOMElements.resultIcon[number].innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    DOMElements.resultMoney[number].textContent = '- ' + bid.toString() + '$';
  }

  clearResultsUI() {
    DOMElements.resultIcon.forEach(element => {
      element.textContent = '?';
      element.innerHtml = '';
    })

    DOMElements.resultMoney.forEach(element => element.textContent = '');
  }

  showQuestionTurnResultMessage(wonMoney){
    DOMElements.turnQuestionResultMessage.classList.add('turn-question-result-message-active');
    DOMElements.resultMessageMoney.textContent = wonMoney;

    setTimeout(() => {
      DOMElements.turnQuestionResultMessage.classList.remove('turn-question-result-message-active');
    }, 2000)
  }

  showFinalResultMessage(wonMoney, playerName) {
    DOMElements.finalResultMessage.classList.add('final-result-message-active');
    DOMElements.finalMoney.textContent = wonMoney;
    DOMElements.playerNameText.textContent = playerName;
  }
}

const resultsUI = new ResultsUI();