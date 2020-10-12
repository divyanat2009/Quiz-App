const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choices-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
let currentQuestion= {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
    {
        question:'What is anorexia caused by?',
        choice1: 'Not enough energy intake',
        choice2: 'Too much fat',
        choice3: 'Not enough protein',
        choice4: 'Not enough exercise',
        correctAnswer: 1
    },
    {
        question:'A deficiency of iron in the diet could lead to what?',
        choice1: 'Scurvy',
        choice2: 'Pellagra',
        choice3: 'Anaemia',
        choice4: 'Skin problems',
        correctAnswer: 3
    },
    {
        question:'Which one has the highest energy content?',
        choice1: 'Protein',
        choice2: 'Fat',
        choice3: 'Sugar',
        choice4: 'Starch',
        correctAnswer: 2
    },
    {
        question:'Which of the following increases your metabolic rate?',
        choice1: 'Eating',
        choice2: 'Excercise',
        choice3: 'Sleeping',
        choice4: 'Being Overweight',
        correctAnswer: 2
    },
    {
        question:'A diet which is low in fibre could lead to which disorder?',
        choice1: 'Heart Disease',
        choice2: 'Bowel Cancer',
        choice3: 'Diabetes',
        choice4: 'Cystic Fibrosis',
        correctAnswer: 2
    },
    {
        question:'A balanced diet must have carbohydrates, proteins, fat, fibre, vitamins and which other type of food?',
        choice1: 'Fatty Acids',
        choice2: 'Cholestrol',
        choice3: 'Water',
        choice4: 'Minerals',
        correctAnswer: 4
    }    
    ]

//Constant
const correctAnsPoints = 10;
const maxQuestions= 6;

//Start the quiz
function startQuiz(){
  //Prevent form submission
  $('.questionForm').submit(function(e){
  e.preventDefault();  
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  });
  
}

// Get a new question each time
function getNewQuestion(){
  questionCounterText.innerText = `${questionCounter} out of ${maxQuestions}`;  
  questionCounter++;
  const questionNumber = Math.floor(Math.random()*availableQuestions.length);
  currentQuestion = availableQuestions[questionNumber];
  question.innerText = currentQuestion.question;
}
startQuiz();


