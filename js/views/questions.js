class questionsUI {
  renderCategoryModal(categories) {
    DOMElements.questionCategoryModal.classList.add('.categoryModalOpen')
    DOMElements.questionCategory1.textContent = categories[0]; 
    DOMElements.questionCategory2.textContent = categories[1]; 
  }

  closeCategoryModal() {
    DOMElements.questionCategoryModal.classList.remove('.categoryModalOpen');
  }

  renderQuestion(activeQuestion, answers) {
    DOMElements.questionDescription.textContent = activeQuestion.question;
    DOMElements.questionAnswer1.textContent = answers[0];
    DOMElements.questionAnswer2.textContent = answers[1];
    DOMElements.questionAnswer3.textContent = answers[2];
    DOMElements.questionAnswer4.textContent = answers[3];
  }

  clearQuestionUI() {
    DOMElements.questionDescription.textContent = '';
    DOMElements.questionAnswer1.textContent = '';
    DOMElements.questionAnswer2.textContent = '';
    DOMElements.questionAnswer3.textContent = '';
    DOMElements.questionAnswer4.textContent = '';
  }
}