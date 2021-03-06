class Game {
  constructor() {
    this.playerName = DOMElements.playerName;
    DOMElements.btnStartGame.addEventListener('click', this.startGame.bind(this));
    DOMElements.btnStartGameAgain.addEventListener('click', this.startGameAgain.bind(this))
    this.gameTurn = 0;
    this.wonGame = false;
    this.loseGame = false;
  }
  
  renderTurn() {
    questions.getCategories();
    questionsUI.openCategoryModal(questions.activeCategories);
    bidsUI.clearBidUI();
    bids.setBid(DOMElements.bidValueInputs);
    bids.wonBid = 0;
    bids.loseBid = 0;
  }
  
  startGame() {
    if(this.playerName.value) {
      this.renderTurn();
      questionsUI.closeWelcomeBoard();

      DOMElements.questionCategoryModal.addEventListener('click', (e) => {
        if(e.target.className === 'question-category-1' || e.target.className === 'question-category-2') {
          questions.getQuestion(e.target.textContent);
          questionsUI.renderQuestion(questions.activeQuestion, questions.activeQuestionAnswers)
          questionsUI.closeCategoryModal();
        }
      })
      
      DOMElements.bidValueInputs.forEach(input => input.addEventListener('input', (e)=> {
        bids.setBid(DOMElements.bidValueInputs);
        DOMElements.money.textContent = bids.convertedMoney;
      }))
  
      DOMElements.btnConfirmBid.addEventListener('click', () => {
        if(DOMElements.money.textContent === '0$') {
          bids.checkBid(questions.activeCorrectAnswer);
          if(this.gameTurn == 9) {
            bidsUI.renderMoney(bids.wonBid);
            resultsUI.renderQuestionResults(bids.loseBid, this.gameTurn);
            resultsUI.showQuestionTurnResultMessage(bids.loseBid, bids.wonBid);
            setTimeout(() => {
              resultsUI.showFinalResultMessage(bids.wonBid, this.playerName.value);
            }, 4000);
            return;
          }
          if(bids.wonBid) {
            questionsUI.showCorrectAnswer(questions.activeCorrectAnswer);
            resultsUI.renderQuestionResults(bids.loseBid, this.gameTurn);
            resultsUI.showQuestionTurnResultMessage(bids.loseBid, bids.wonBid);
            bidsUI.renderMoney(bids.wonBid);
            this.gameTurn++;
            setTimeout(() => {
              this.renderTurn();
            }, 4000)
          } else {
            questionsUI.showCorrectAnswer(questions.activeCorrectAnswer);
            resultsUI.showQuestionTurnResultMessage(bids.loseBid, bids.wonBid);
            setTimeout(() => {
              resultsUI.showFinalResultMessage(bids.wonBid, this.playerName.value);
            }, 4000);
          }

        } else {
          bidsUI.showErrorBidMessage();
        }
      })
    }
  }

  startGameAgain() {
    window.location.reload(true)
  }
}

const game = new Game();
