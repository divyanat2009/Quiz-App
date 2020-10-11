const quiz ={ 
    
questions:[
{
    question:'What is anorexia caused by?',
    options:[
        'Not enough energy intake',
        'Too much fat',
        'Not enough protein',
        'Not enough exercise'],
    correctAnswer: 0
},
{
    question:'A deficiency of iron in the diet could lead to what?',
    options:[
        'Scurvy',
        'Pellagra',
        'Anaemia',
        'Skin problems'],
    correctAnswer: 2 
},
{
    question:'Which one has the highest energy content?',
    options:[
        'Protein',
        'Fat',
        'Sugar',
        'Starch'],
    correctAnswer: 1
},
{
    question:'Which of the following increases your metabolic rate?',
    options:[
        'Eating',
        'Excercise',
        'Sleeping',
        'Being Overweight'],
    correctAnswer: 1 
},
{
    question:'A diet which is low in fibre could lead to which disorder?',
    options:[
        'Heart Disease',
        'Bowel Cancer',
        'Diabetes',
        'Cystic Fibrosis'],
    correctAnswer: 1
},
{
    question:'A balanced diet must have carbohydrates, proteins, fat, fibre, vitamins and which other type of food?',
    options:[
        'Fatty Acids',
        'Cholestrol',
        'Water',
        'Minerals'],
    correctAnswer: 3
}    
]
};

let currentQuestion= 0;
let correctAnswer= 0;
let quizOver=false;
let availableQuestions=[];

function startQuiz(){
    $('.js-form-choices').submit(function(event){
        event.preventDefault();
    })    
     $('.startQuiz').click(function(){
           
    })
}

