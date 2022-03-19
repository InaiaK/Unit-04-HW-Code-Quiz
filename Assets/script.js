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
        "q":"Which of the following tags instructs the browser to expect a well-formed HTML document? ?",
        "option1":"<body>",
        "option2":"<head>",
        "option3":"<div>",
        "option4":"<!DOCTYPE html>",
         "answer":"<!DOCTYPE html>"
    },
    {
        "q":"The following HTML code should only exist within which of the following tags? <title>Codecademy</title> ",
        "option1":"<h1>",
        "option2":"<head>",
        "option3":"<body>",
        "option4":"<!DOCTYPE html>",
         "answer":"<head>"
    },
    {
        "q":"What does CSS stand for ?",
        "option1":"Cascading Style Sheets",
        "option2":"Cascading Style Style",
        "option3":"Cascading Sheets Style ",
        "option4":"Cascading Sheets Sheets",
         "answer":"Cascading Style Sheets"
    },
    {
        "q":"Inside which HTML element do we put the JavaScript?",
        "option1":"<js>",
        "option2":"<javascript>",
        "option3":"<scripting>",
        "option4":"<script>",
         "answer":"<script>"
    },
    {
        "q":"Which of the following is an advantage of using JavaScript?",
        "option1":"Less server interaction.",
        "option2":"Immediate feedback to the visitors.",
        "option3":"Increased interactivity.",
        "option4":"All of the options.",
         "answer":"All of the options."
    },
    {
        "q":"Which Of The Dialog Box Display a Message And a Data Entry Field ?",
        "option1":"Alert()",
        "option2":"Prompt()",
        "option3":"tConfirm()",
        "option4":"Msg()",
         "answer":"Prompt()"
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

