// HTML Element Variables
var startBtnEl = document.querySelector(".start-button");
var quizContainer = document.getElementById("quiz-container");
var results = document.getElementById("results");
var containerQuestions = document.querySelector(".container-questions");
var option1 = document.querySelector("#op1");
var option2 = document.querySelector("#op2");
var option3 = document.querySelector("#op3");
var option4 = document.querySelector("#op4");

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
//Hide
quizContainer.style.display = "none";
results.style.display ="none";

startBtnEl.addEventListener('click',function(){
    quizContainer.style.display = "block";
    startBtnEl.style.display = "none";
    toDisplayQuestion()
})


function toDisplayQuestion(){
     containerQuestions.textContent=questionList[currentQ].q;
     option1.textContent = questionList[currentQ].option1
     option2.textContent = questionList[currentQ].option2
     option3.textContent = questionList[currentQ].option3
     option4.textContent = questionList[currentQ].option4
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

