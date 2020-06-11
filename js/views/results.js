class resultsUI {
  renderQuestionResults(bid, number) {
    DOMElements.resultIcon[number].textContent = '';
    DOMElements.resultIcon[number].innerHtml = '<i class="fa fa-times" aria-hidden="true"></i>'
    DOMElements.resultMoney[number].textContent = bid;
  }

  clearResultsUI() {
    DOMElements.resultIcon.forEach(element => {
      element.textContent = '?';
      element.innerHtml = '';
    })

    DOMElements.resultMoney.forEach(element => element.textContent = '');
  }
}