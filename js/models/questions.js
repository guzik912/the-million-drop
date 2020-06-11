class Questions {
  constructor() {
    this.allQuestions = [],
    this.activeCategories = [],
    // this.activeAllCategories = [],
    this.activeQuestion = {},
    this.activeQuestionAnswers = [],
    this.activeCorrectAnswer = '',
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

  // getAllCategories() {
  //   this.activeAllCategories = this.allQuestions.map(question => question.category)
  // }

  getCategories(){
    for(let i = 0; i < 2; i++) {
      let randomNumber = Math.floor(Math.random() * this.allQuestions.length)
      this.activeCategories.push(this.allQuestions[randomNumber].category)
    }
    // this.activeCategory = category;
    // this.activeCategories = 
  }

  getQuestion(category){
    this.activeQuestion = this.allQuestions.find(question => question.category === category);
    this.removedQuestions.push(this.activeQuestion);

    this.getAnswers(this.activeQuestion);
    this.removeQuestion(this.activeQuestion);
  }

  getAnswers(activeQuestion) {
    // const answers = [...this.activeQuestion.incorrect_answers, this.activeQuestion.correct_answer];
    const answers = [...activeQuestion.incorrect_answers, activeQuestion.correct_answer]

    const shuffle = (array) => {
      let counter = array.length;

      while (counter > 0) {
        let randomIndex = Math.floor(Math.round() * counter)
        counter--;
        let temp = array[counter];
        array[counter] = array[randomIndex];
        array[randomIndex] = temp; 
      }

      return array;
    }

    this.activeQuestionAnswers = shuffle(answers);
    // this.activeCorrectAnswer = this.activeQuestion.correct_answer;
    this.activeCorrectAnswer = activeQuestion.correct_answer;
    // this.activeQuestionAnswers = [...this.activeQuestion.incorrect_answers, this.activeQuestion.correct_answer];
    // this.activeCorrectAnswer = this.activeQuestion.correct_answer;
  }

  removeQuestion(activeQuestion){
    const questionIndexToDelete = this.allQuestions.findIndex(question => question.question === question.question);

    this.allQuestions.splice(questionIndexToDelete, 1);
  }

  calculateQuestionQue(){
    return this.removedQuestions.length;
  }
}


const question = new Questions()

