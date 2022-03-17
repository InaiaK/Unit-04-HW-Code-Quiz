// HTML Element Variables
var startBtnEl = document.querySelector(".start-button");
var quizContainer = document.getElementById("quiz-container");
var results = document.getElementById("results");
var containerQuestions = document.querySelector(".container-questions");
var option1 = document.querySelector("#op1");
var option2 = document.querySelector("#op2");
var option3 = document.querySelector("#op3");
var option4 = document.querySelector("#op4");
var timerEl = document.getElementById("timer");
var correct = document.querySelector(".correct-wrong");
option1.addEventListener("click",checkAnswer);
option2.addEventListener("click",checkAnswer);
option3.addEventListener("click",checkAnswer);
option4.addEventListener("click",checkAnswer);

// Question
var questionList =[
{
        "q":"What is the extension of HTML file ?",
        "option1":"hml",
        "option2":"html",
        "option3":"tml",
        "option4":"css",
         "answer":"html"
    },
    {
        "q":"What is the extension of HTML file ?",
        "option1":"hml",
        "option2":"html",
        "option3":"tml",
        "option4":"css",
         "answer":"html"
    },
    {
        "q":"What is the extension of HTML file ?",
        "option1":"hml",
        "option2":"html",
        "option3":"tml",
        "option4":"css",
         "answer":"html"
    },
    {
        "q":"What is the extension of HTML file ?",
        "option1":"hml",
        "option2":"html",
        "option3":"tml",
        "option4":"css",
         "answer":"html"
    },
    {
        "q":"What is the extension of HTML file ?",
        "option1":"hml",
        "option2":"html",
        "option3":"tml",
        "option4":"css",
         "answer":"html"
    },
    {
        "q":"What is the extension of HTML file - last ?",
        "option1":"hml",
        "option2":"html",
        "option3":"tml",
        "option4":"css",
         "answer":"html"
    }
]
//
var currentQ = 0;
var currentObject;
var timer = 60;
var score = 0;
//Hide
quizContainer.style.display = "none";
results.style.display ="none";

startBtnEl.addEventListener('click',function(){
    quizContainer.style.display = "block";
    startBtnEl.style.display = "none";
    toDisplayQuestion();
    currentObject = setInterval(function(){
        timerEl.textContent= "Time Left: "+ timer;
        if(timer> 1){
            timer-- ;
        }else {
            displayresults()
        }

    },1000)
})


function toDisplayQuestion(){
     containerQuestions.textContent=questionList[currentQ].q;
     option1.textContent = questionList[currentQ].option1
     option2.textContent = questionList[currentQ].option2
     option3.textContent = questionList[currentQ].option3
     option4.textContent = questionList[currentQ].option4
}

function displayresults(){

}

function checkAnswer(){
  var userSelection = this.textContent;
  console.log(userSelection);
  if(userSelection ==questionList[currentQ].answer){
     score+=5
     correct.textContent="correct"

  }else{
      timer-=5  
      
      correct.textContent="wrong"
  }
  if(currentQ < questionList.length-1){
      currentQ++
      toDisplayQuestion()
  }else{
      displayresults()
  }
}
// Quiz Rules

// Start Button

// Start the time

// Questions will be asked

// Answer Options

//Select one answer

// Answer is Correct or Wrong

// Add to the Score

// Submit Quiz button 

// Add Name , show score and save both.

//  Ask to Start Over 

