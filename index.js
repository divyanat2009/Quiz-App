  // Initialize Variables
  let score = 0;
  let questionCounter = 0;
  
  //Reset question counter and score
  function resetValues()
  {
    questionCounter = 0;
    score = 0;
    $("#scoreText").text("Score: " +score+"/"+ questions.length);
  }
  //Question Counter
  function updateQuestionCount(counter)
  {
    $("#progressText").html("Question: "+counter +"/" +questions.length);
  }
  
  // Hide containers
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
  
  //Render the question and respective answers each time
  function renderQuestionAndAnswers(question, answers)
  {
     $('.headline').hide();
     $('.result-container').hide();
     $('.next').hide();
     $('#question').html(question);
     $('.choice-container').html("");
     answers.forEach(answer =>{
     $('.choice-container').append(
     `<li><input type ="radio" value="${answer}" name="answers" class="choice-text"> ${answer}</li>`)
     });   
   }
  //Render next question and answers, update total score
  function renderNextQuestionAndAnswers()
  {
      $('.questionForm').submit(function(e){
      e.preventDefault();
      $('#responseBox').hide();    
      questionCounter++;
      if(questionCounter == questions.length)
      {
       alert("No more questions");
       $(".result-container").modal({ fadeDuration: 100 }); 
       $(".result-container p").append(`${score}/${questions.length}`);                 
       resetValuesAndRenderQuestionsAndAnswers();
       reStartQuiz();
      }
      else
      {
        updateQuestionCount(questionCounter+1);
        renderQuestionAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);        
      }
      
     });      
  }

  //Check options - correct, incorrect, no  selection made  
  function checkAnswers()
  {
    $("input[type='button']").click(function(){
      let selectedAnswer= $("input[name='answers']:checked").val();
      $('#responseBox').show();
      if (!selectedAnswer){
        alert("Please select an option");
      }
      else{
      let correctOption = questions[questionCounter].answers[questions[questionCounter].correctAnswer]
      if (selectedAnswer===correctOption){
      $('#responseBox').text("Correct.").css("border", "2px solid #00ff00");
      $('.next').fadeIn(1000);
      score += 1;      
      $("#scoreText").text("Score: " +score+"/"+ questions.length);      
      }
      if (selectedAnswer!==correctOption){
        $('#responseBox').text("Incorrect. The correct answer is :" +correctOption).css("border", "2px solid red");
        $('.next').fadeIn(1000);             
      }  
      }        
    });        
  }

  // Start Quiz
  function startQuiz()
   {
      $("#startQuiz").click(()=>{
      OnOffComponents(true);
      resetValuesAndRenderQuestionsAndAnswers();
      renderNextQuestionAndAnswers();
      
    });
   }
  // Restart quiz
  function reStartQuiz()
   {
    $(".restartQuiz").click(()=>{
      resetValuesAndRenderQuestionsAndAnswers();
      init();
    });
   }
  
  function resetValuesAndRenderQuestionsAndAnswers()
   {
      resetValues();
      renderQuestionAndAnswers(questions[questionCounter].question, questions[questionCounter].answers);   

   }
  
  //Call all functions
   function init()
   {
    startQuiz();
    reStartQuiz();
    resetValues();
    updateQuestionCount(1);
    checkAnswers();
    $(".next").hide();
    }
  $(init);
  
  