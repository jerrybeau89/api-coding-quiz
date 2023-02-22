// variables for time
let timerEl = document.querySelector(".timer");
let timeInterval;
let timeLeft;

// variables for questions and answers
let startButton = document.querySelector("#start-button");
let questionBox = document.querySelector(".question-box");
let answerSection = document.querySelector(".answer-section");
let answerBox = document.querySelectorAll(".answer-box");
let ansConfirmation = document.querySelector(".ansConfirmation");
let answerA = document.getElementById("a");
let answerB = document.getElementById("b");
let answerC = document.getElementById("c");
let answerD = document.getElementById("d");
let selectedAnswer = '';
let lastQuestion = (questions.length - 1);
let currentQuestion = 0;

// variables for score and high scores
let highScoreButton = document.getElementById("high-score-button");
let score = 0;
let highScore = 0; 
let newHighScore;
let scoreUser 
let highScoreUser = '';
let newHighScoreUser;

//calls high score function
getHighScore();

// variables for initials
let inputForm = document.createElement("form");
let initialsInput = document.createElement("input");
let submit = document.createElement("input");
const h1 = document.querySelector('h1');

startButton.addEventListener("click", startGame);

// An array of object questions and answers for the quiz. 
let questions = [{
  question: 'The content of the page (such as your pictures, text, links) will show up where?',
  a: 'Head',
  b: 'Body',
  c: 'Style',
  d: 'Folder',
  answer: 'b'
},
{
  question: 'What is the default link color for hyperlinks?',
  a: 'green',
  b: 'blue',
  c: 'purple',
  d: 'red',
  answer: 'b'
},
{
  question: 'Which tag is used to underline text?',
  a: '<a>',
  b: '<u>',
  c: '<b>',
  d: '<l>',
  answer: 'b'
},
{
  question: 'What defines a division or a section in an HTML document. Used to group block-elements to format them with CSS?',
  a: '<div>',
  b: '<span>',
  c: '<caption>',
  d: '<group>',
  answer: 'a'
},
{
  question: 'What does CSS stand for?',
  a: 'Come See Something',
  b: 'Cash Rules Everything Around Me',
  c: 'Cascading Style Sheets',
  d: 'Core Style Sheets',
  answer: 'c'
},
{
  question: 'Which is used to make a comment in HTML?',
  a: '<!-- -->',
  b: '//-- ',
  c: '*/*',
  d: '#',
  answer: 'a'
},
{
  question: 'Where in an HTML document is the correct place to refer to an external style sheet (such as style.css)?',
  a: 'In the <head> section',
  b: 'In the <body> section',
  c: 'At the end of the document',
  d: 'In the <css> section',
  answer: 'a'
},
{
  question: 'Which is the correct CSS syntax?',
  a: 'body:color=black;',
  b: '{body;color:black;}',
  c: 'body {color: black;}',
  d: '{body:color=black;}',
  answer: 'c'
},
{
  question: 'Which of the following is NOT a data type in Javascript?',
  a: 'tuple',
  b: 'string',
  c: 'boolean',
  d: 'array',
  answer: 'a'
},
{
  question: 'Which of the following cannot be redeclared?',
  a: 'const',
  b: 'let',
  c: 'var',
  d: 'all of the above',
  answer: 'a'
},
{
  question: 'Which property is used to change the background color?',
  a: 'bgcolor',
  b: 'background-color',
  c: 'bcolor',
  d: 'background-colour',
  answer: 'b'
},
{
  question: 'What file extension (the bit after the name) does CSS have?',
  a: '.cvs',
  b: '.css',
  c: '.ccs',
  d: '.csc',
  answer: 'b'
},
{
  question: 'JavaScript files have the file extension (the bit after the name):',
  a: '.js',
  b: '.css',
  c: '.java',
  d: '.html',
  answer: 'a'
},
{
  question: 'What is a variable?',
  a: 'Store values so we can use them later and change them from the code.',
  b: 'Store values so we can use them but cannot change them.',
  c: 'Store values so we can use them once.',
  d: "Store values in containers so we can't use them later.",
  answer: 'a'
},
];

inputForm.style.margin = '5%';
submit.type = "submit";
submit.value = "Submit";
submit.classList.add("submit-button");
initialsInput.type = "text";
initialsInput.placeholder = "Please enter your initials here!";
initialsInput.setAttribute('id', 'initials-input');

function inputQuestions() {
  answerBox[0].style.display = 'block';
  answerBox[1].style.display = 'block';
  answerBox[2].style.display = 'block';
  answerBox[3].style.display = 'block';
  let q = questions[currentQuestion];
  for (let i = 0; i < questions.length; i++) {
    
    answerSection.style.height = '250px';
    questionBox.innerHTML = q.question;
    answerA.textContent = q.a;
    answerB.textContent = q.b;
    answerC.textContent = q.c;
    answerD.textContent = q.d;
  }
};

function timer() {
  timeLeft = 100;
  timeInterval = setInterval(function () {
    if (timeLeft > 1){
      timerEl.textContent = timeLeft + ' seconds left';
    } else {
      timerEl.textContent = timeLeft + ' second left';
    }
    timeLeft--;
    
    if (timeLeft <= 0){
      clearInterval(timeInterval);
      timerEl.textContent = '';
      if (score > 1){
      questionBox.innerHTML = "<h1> Time's up. You scored " + score + "points! </h1>";
      }else {
        questionBox.innerHTML = "<h1> Time's up. You scored " + score + "point. </h1>";
      }
      questionBox.appendChild(inputForm);
      inputForm.appendChild(initialsInput);
      inputForm.appendChild(submit);
      for (let i = 0; i < answerBox.length; i++) {
        answerBox[i].style.display = 'none';
        startButton.style.display = 'block';
      }
    }
  }, 1000);
}

function startGame() {
  score = 0;
  currentQuestion = 0;
  startButton.style.display = 'none';
  getHighScore();
  timer();
  inputQuestions();
};


