/*
  add basic functionality                       []
  add styles                                    [] 
  make responsive (laptop, tablet, phone)       [] 
*/

let currentQuestion = 0;
let userScore = 0; 
let isCorrect = false; 

const quiz = [
  {
    id: 1,
    question: "Which one of the options is NOT a primitive data type in Java?",
    options: ["String", "boolean", "int", "long"],
    correctOption: "String"
  },
  {
    id: 2,
    question: "Which of the following is a pillar of OOP?",
    options: ["capsulating", "overloading", "inheritance", "overriding"],
    correctOption: "inheritance"
  },
  {
    id: 3,
    question: "Where do reference variables point to?",
    options: ["heap", "stack", "dump", "ram"],
    correctOption: "heap"
  }
]

// CREATE ELEMENTS 

function createQuestionNumber(quizQuestion){
  const questionNumberContainer = document.getElementById("question-number");
  questionNumberContainer.innerText = quizQuestion.id;
}

function createQuizQuestion(quizQuestion){
  const questionContainer = document.getElementById("question");
  questionContainer.innerText = quizQuestion.question; 
}

function createQuizOptions(quizQuestion){
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  quizQuestion.options.forEach(option => {
    const listItem = document.createElement("li");
    listItem.innerText = option;
    optionsContainer.appendChild(listItem);
  })
}

function updateQuiz(quizQuestion){
  createQuestionNumber(quizQuestion);
  createQuizQuestion(quizQuestion);
  createQuizOptions(quizQuestion);
}

function updateScore(){
  if(isCorrect){
    userScore++;
  }
}

// INTERACTIVITY 

function toggleClicked(el){
  if(el.classList.contains("clicked")){
    el.classList.remove("clicked");
  } else {
    el.setAttribute("class", "clicked");
  }
  
}



/*
===============================================================
    APP
===============================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  // add app code here 
  const startButton = document.getElementById("start-button");
  const submitButton = document.getElementById("submit-button");


  // INTERACTIVITY //

  startButton.addEventListener("click", (e) => {
    updateQuiz(quiz[currentQuestion]);
    const introOverlay = document.getElementById("intro-overlay");
    introOverlay.setAttribute("class", "hidden");
  })

  const optionsContainer = document.getElementById("options");
  optionsContainer.addEventListener('click', e => {
    if(e.target.innerText === quiz[currentQuestion].correctOption){
      isCorrect = true; 
      console.log("correct!");
    } else {
      isCorrect = false; 
      console.log("wrong");
    }
    toggleClicked(e.target);
  })

  submitButton.addEventListener("click", (e) => {
    //check answer 
    currentQuestion++;
    updateQuiz(quiz[currentQuestion]);
    updateScore();
  })
})