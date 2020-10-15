
  // Initialize Variables
  let score = 0;
  let questionCounter = 0;

  //Reset question counter and score
  function resetValues(){
    questionCounter = 0;
    score = 0;
  }
  
  function updateQuestionCount(counter)
  {
    $("#progressText").html("Question "+counter +" of " +questions.length);
  }
  
  // hide containers
  function OnOffComponents(on)
   {
    if(!on)
    {
      $("#hud").hide();
      $("#score").hide();
      $(".quiz-container").hide();
      $(".result-container").hide();
    }
    else
    {
      $("#hud").removeAttr("hidden");
      $("#score").removeAttr("hidden");
      $(".quiz-container").removeAttr("hidden");
      $(".result-container").removeAttr("hidden");
    }
   }
  
   //render the question and respective answers each time
   function renderQuestionAndAnswers(question, answers){
     $('#question').html(question);
     $('.choice-container').html("");
     answers.forEach(answer =>{
     $('.choice-container').append(
     `<li><input type ="radio" class="choice-text"> ${answer}</li>`)
     });   
   }
  //render next question and answers
   function renderNextQuestionAndAnswers(){
      $('.questionForm').submit(function(e){
      e.preventDefault();    
      questionCounter++;
      if(questionCounter == questions.length)
      {
       alert("No more questions");
       resetValuesAndRenderQuestionsAndAnswers();
       init();
      }
      else
      {
        updateQuestionCount(questionCounter+1);
        renderQuestionAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);
        
      }
      
     });
  
   }
  // when start button id clicked
   function startQuiz()
   {
      $("#startQuiz").click(()=>{
      OnOffComponents(true);
      resetValuesAndRenderQuestionsAndAnswers();
      renderNextQuestionAndAnswers();
     
    });
   }
  
   function reStartQuiz(){
    $(".restartQuiz").click(()=>{
      resetValuesAndRenderQuestionsAndAnswers();
      init();
    });
   }
  
   function resetValuesAndRenderQuestionsAndAnswers(){
      resetValues();
      renderQuestionAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);
   }
  
   //call all functions
   function init()
   {
    startQuiz();
    reStartQuiz();
    resetValues();
    updateQuestionCount(1);
   }
  $(init);
  
  