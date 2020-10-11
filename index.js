const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choices-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
let currentQuestion= {};
let score = 0;
let questionNumber = 0;
let availableQuestions = [];

//Constant
const correctAnsPoints = 10;
const maxQuestions= 6;

startQuiz = () =>{
    questionNumber = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () =>{
questionNumber++;

}

startQuiz();


