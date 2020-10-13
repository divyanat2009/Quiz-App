let questions = [
  {
      question:'What is anorexia caused by?',
      answers: [
      'A. Not enough energy intake',
      'B. Too much fat',
      'C. Not enough protein',
      'D. Not enough exercise'],
      correctAnswer: 0
  },
  { 
      question:'A deficiency of iron in the diet could lead to what?',
      answers: [
      'A. Scurvy',
      'B. Pellagra',
      'C. Anaemia',
      'D. Skin problems'],
      correctAnswer: 3
  },
  {
      question:'Which one has the highest energy content?',
      answers:[
       'A. Protein',
       'B. Fat',
       'C. Sugar',
       'D. Starch'],
      correctAnswer: 2
  },
  {
      question:'Which of the following increases your metabolic rate?',
      answers: [
      'A. Eating',
      'B. Excercise',
      'C. Sleeping',
      'D. Being Overweight'],
      correctAnswer: 2
  },
  {
      question:'A diet which is low in fibre could lead to which disorder?',
      answers:[
      'A. Heart Disease',
      'B. Bowel Cancer',
      'C. Diabetes',
      'D. Cystic Fibrosis'],
      correctAnswer: 2
  },
  {
      question:'A balanced diet must have carbohydrates, proteins, fat, fibre, vitamins and which other type of food?',
      answers:[
      'A. Fatty Acids',
      'B. Cholestrol',
      'C. Water',
      'D. Minerals'],
      correctAnswer: 4
  }   
  ]
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choices-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
let currentQuestion= {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let maxQuestions= 0;
//Constant
//let correctAnsPoints = 10;
console.log(questions);


//Start the quiz
function startQuiz(){
  renderQuestionsAndAnswers(questions[0].question, questions[0].answers);
  renderNextQuestionAndAnswers();

}

/*function submitQuestionForm(){
    //Prevent form submission
    $('.questionForm').submit(function(e){
      e.preventDefault();  
      resetValues();
      availableQuestions = [...questions];
      getNewQuestion();
      });
      
}*/

function resetValues(){
  questionCounter = 0;
  score = 0;
  maxQuestions= questions.length;
}

function setQuestionCount(questionCounter){
  questionCounterText.innerText = `${questionCounter} out of ${maxQuestions}`;
}

// Get a new question each time
/*function getNewQuestion(){    
  questionCounter++;
  setQuestionCount(questionCounter);
  const questionNumber = Math.floor(Math.random()*availableQuestions.length);
  currentQuestion = availableQuestions[questionNumber];
  question.innerText = currentQuestion.question;
}*/
 function renderQuestionsAndAnswers(question, answers){
   $('#question').html = question;
   answers.forEach(answer =>{
   $('.choice-container').append(
   `<li><input type ="radio" class="choice-text"> ${answer}</li>`)
   });   
 }
 function renderNextQuestionAndAnswers(){
    $('.questionForm').submit(function(e){
    e.preventDefault();    
    questionCounter++;
    console.log(questions);
    console.log(questions[questionCounter].question);
    console.log(questions[questionCounter]["answers"]);
   // renderQuestionsAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);
   });

 }

startQuiz();


