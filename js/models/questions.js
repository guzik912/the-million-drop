class Questions {
  constructor() {
    this.allQuestions = [],
    this.activeCategory = '',
    this.activeQuestion = {},
    this.removedQuestions = [],
    this.successedQuestions = [],
    this.failedQuestions = []
  }

  fetchQuestions(){
    fetch('https://opentdb.com/api.php?amount=20&type=multiple')
    .then(res => res.json())
    .then(questions => this.allQuestions = questions.results)
    .catch(err => console.log(err))
  }

  getCategory(category){
    this.activeCategory = category;
  }

  getQuestion(){
    this.activeQuestion = this.allQuestions.find(question => question.category === this.activeCategory);

    this.removedQuestions.push(this.activeQuestion);
    this.removeQuestion();
  }

  removeQuestion(){
    const index = this.allQuestions.findIndex(question => question.question === this.activeQuestion.question);

    this.allQuestions.splice(index, 1);
  }

  calculateQuestionQue(){
    return this.removedQuestions.length;
  }
}


