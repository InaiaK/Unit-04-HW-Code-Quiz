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
var submitBtnEl = document.querySelector(".submit-button");
var getScore = document.querySelector(".score");
option1.addEventListener("click",checkAnswer);
option2.addEventListener("click",checkAnswer);
option3.addEventListener("click",checkAnswer);
option4.addEventListener("click",checkAnswer);


// Question
var questionList =[
{
        "q":"01- What does HTML stand for?",
        "option1":"<Home Tool Markup Language.>",
        "option2":"<Hyper Text Markup Language.",
        "option3":"<Hyperlinks and Text Markup Language.>",
        "option4":"<HTML>",
         "answer":"<Hyper Text Markup Language.>"
    },
    {
        "q":"02- The following HTML code should only exist within which of the following tags? <title>Codecademy</title> ",
        "option1":"<h1>",
        "option2":"<head>",
        "option3":"<body>",
        "option4":"<!DOCTYPE html>",
         "answer":"<head>"
    },
    {
        "q":"03- What does CSS stand for ?",
        "option1":"Cascading Style Sheets",
        "option2":"Cascading Style Style",
        "option3":"Cascading Sheets Style ",
        "option4":"Cascading Sheets Sheets",
         "answer":"Cascading Style Sheets"
    },
    {
        "q":"04- Inside which HTML element do we put the JavaScript?",
        "option1":"<js>",
        "option2":"<javascript>",
        "option3":"<scripting>",
        "option4":"<script>",
         "answer":"<script>"
    },
    {
        "q":"05- Which of the following is an advantage of using JavaScript?",
        "option1":"Less server interaction.",
        "option2":"Immediate feedback to the visitors.",
        "option3":"Increased interactivity.",
        "option4":"All of the options.",
         "answer":"All of the options."
    },
    {
        "q":"06- Which Of The Dialog Box Display a Message And a Data Entry Field ?",
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

// Start timer & Quiz
startBtnEl.addEventListener('click',function(){
    quizContainer.style.display = "block";
    startBtnEl.style.display = "none";
    toDisplayQuestion();
    currentObject = setInterval(function(){
        timerEl.textContent= "Time Left: "+ timer;
        if(timer> 1){
            timer-- ;
        }else {
            clearInterval(timer);
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

// Answer WRONG is subtracted from the clock.
function checkAnswer(){
  var userSelection = this.textContent;
  console.log(userSelection);
  if(userSelection ==questionList[currentQ].answer){
     score+=5
     correct.textContent="Correct"
  }else{
      timer-=5  
      correct.textContent="Wrong"
  }
  if(currentQ < questionList.length-1){
      currentQ++
      toDisplayQuestion()
  }else{
    toDisplayQuestion()
  }
}


function finalScore(){
 if(questionList[currentQ]=answer){
     score = 1++
     correct.textContent="Correct"
 } else {
     score = 0
     correct.textContent="Wrong"
 }
}

