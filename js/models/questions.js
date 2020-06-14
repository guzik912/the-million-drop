class Questions {
  constructor() {
    this.allQuestions = [],
    this.activeCategories = [],
    this.activeQuestion = {},
    this.activeQuestionAnswers = [],
    this.activeCorrectAnswer = '',
    this.removedQuestions = []
  }

  fetchQuestions(){
    fetch('https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(questions => this.allQuestions = questions.results)
    .catch(err => console.log(err))
  }

  getCategories(){
    let randomNumber1 = Math.floor(Math.random() * this.allQuestions.length);
    let randomNumber2 = Math.floor(Math.random() * this.allQuestions.length);
    
    if(randomNumber1 === randomNumber2 || this.allQuestions[randomNumber1].category === this.allQuestions[randomNumber2].category) {
      this.getCategories();
    } else {
      this.activeCategories = [this.allQuestions[randomNumber1].category, this.allQuestions[randomNumber2].category]
    }
  }

  getQuestion(category){
    this.activeQuestion = this.allQuestions.find(question => question.category === category);
    this.removedQuestions.push(this.activeQuestion);

    this.getAnswers(this.activeQuestion);
    this.removeQuestion(this.activeQuestion);
  }

  getAnswers(activeQuestion) {
    const answers = [...activeQuestion.incorrect_answers];
    let randomNumber = Math.floor(Math.random() * answers.length + 1)
    let tempAnswer = answers[randomNumber];
    answers[randomNumber] = activeQuestion.correct_answer
    answers.push(tempAnswer);
    this.activeQuestionAnswers = answers; 
    this.activeCorrectAnswer = activeQuestion.correct_answer;
  }

  removeQuestion(){
    const questionIndexToDelete = this.allQuestions.findIndex(question => question.question === question.question);

    this.allQuestions.splice(questionIndexToDelete, 1);
  }

  calculateQuestionQue(){
    return this.removedQuestions.length;
  }
}


const questions = new Questions();
questions.fetchQuestions();
