class QuestionsUI {
  openCategoryModal(categories) {
    DOMElements.questionCategoryModal.classList.add('categoryModalOpen')
    DOMElements.questionCategory1.textContent = categories[0]; 
    DOMElements.questionCategory2.textContent = categories[1]; 
  }

  closeCategoryModal() {
    DOMElements.questionCategoryModal.classList.remove('categoryModalOpen');
  }

  closeWelcomeBoard() {
    DOMElements.welcomeBoard.classList.add('hide')
  }

  renderQuestion(activeQuestion, answers) {
    DOMElements.questionDescription.textContent = activeQuestion.question;
    DOMElements.questionAnswers.forEach((answer, index) => answer.textContent = answers[index]);
  }

  clearQuestionUI() {
    DOMElements.questionDescription.textContent = '';
    DOMElements.questionAnswers.forEach(answer => answer.textContent = '');
  }

  showCorrectAnswer(correctAnswer) {
    DOMElements.questionAnswers.forEach(answer => {
      if(answer.textContent === correctAnswer) {
        answer.classList.add('question-answer-correct');

        setTimeout(()=>{
          answer.classList.remove('question-answer-correct');
        }, 2000)
      }

    });
  }
}

const questionsUI = new QuestionsUI();