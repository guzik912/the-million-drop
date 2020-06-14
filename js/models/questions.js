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

    this.clearQuestionsContentFromEntities(this.activeQuestion)
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

  clearQuestionsContentFromEntities(question) {
    let fixedQuestionDescription = '';
    let fixedQuestionIncorrectAnswers = [];
    let fixedQuestionCorrectAnswer = '';

    if(question.question.includes('&amp;')) {
      fixedQuestionDescription = question.question.replace(/&amp;/g, '\&');
    } else if (question.question.includes('&quot;')) {
      fixedQuestionDescription = question.question.replace(/&quot;/g, '\"');
    } else if (question.question.includes('&#039')) {
      fixedQuestionDescription = question.question.replace(/&#039;/g, "\'");
    } else {
      fixedQuestionDescription = question.question;
    }
    
    question.incorrect_answers.map(answer => {
      if(answer.includes('&amp;')) {
        fixedQuestionIncorrectAnswers.push(answer.replace(/&amp;/g, '\&'));
      } else if(answer.includes('&quot;')) {
        fixedQuestionIncorrectAnswers.push(answer.replace(/&quot;/g, '\"'));
      } else if(answer.includes('&#039')) {
        fixedQuestionIncorrectAnswers.push(answer.replace(/&#039;/g, "\'"));
      } else {
        fixedQuestionIncorrectAnswers.push(answer)
      }
    })

    if(question.correct_answer.includes('&amp;')) {
      fixedQuestionCorrectAnswer = question.correct_answer.replace(/&amp;/g, '\&');
    } else if(question.correct_answer.includes('&quot;')) {
      fixedQuestionCorrectAnswer = question.correct_answer.replace(/&quot;/g, '\"');
    } else if(question.correct_answer.includes('&quot;')) {
      fixedQuestionCorrectAnswer = question.correct_answer.replace(/&#039;/g, "\'");
    } else {
      fixedQuestionCorrectAnswer = question.correct_answer;
    }
    
    question.question = fixedQuestionDescription;
    question.incorrect_answers = fixedQuestionIncorrectAnswers;
    question.correct_answer = fixedQuestionCorrectAnswer;
  }

  calculateQuestionQue(){
    return this.removedQuestions.length;
  }
}


const questions = new Questions();
questions.fetchQuestions();
