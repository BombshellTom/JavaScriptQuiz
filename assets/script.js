// an array for the quetiosn and answers
let questions = [{
  qno: 0,
  question: "These four actors played which character in a well know film series?",
  sorc: "assets/pics/q1.png",
  ans1: "P",
  ans2: "Q",
  ans3: "R",
  ans4: "S",
}, {
  qno: 1,
  question: "These four actors played which character in the same film series?",
  sorc: "assets/pics/q2.png",
  ans1: "J",
  ans2: "K",
  ans3: "L",
  ans4: "M",
}, {
  qno: 2,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/pics/q3.png",
  ans1: "D",
  ans2: "E",
  ans3: "F",
  ans4: "G",
}, {
  qno: 3,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/pics/q4.png",
  ans1: "D",
  ans2: "E",
  ans3: "S",
  ans4: "P",
}, {
  qno: 4,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/pics/q5.png",
  ans1: "H",
  ans2: "I",
  ans3: "T",
  ans4: "L",
}, {
  qno: 5,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/pics/q6.png",
  ans1: "F",
  ans2: "G",
  ans3: "H",
  ans4: "I",
}, {
  qno: 6,
  question: "What letter did the Romans use for their number '500'?",
  sorc: "assets/pics/q7.png",
  ans1: "L",
  ans2: "V",
  ans3: "D",
  ans4: "M",
}, {
  qno: 7,
  question: "What is MAriah Carey's perfume called?",
  sorc: "assets/pics/q8.png",
  ans1: "C",
  ans2: "D",
  ans3: "M",
  ans4: "L",
}, {
  qno: 8,
  question: "What is the chemical symbol of the element Potassium?",
  sorc: "assets/pics/q9.png",
  ans1: "K",
  ans2: "E",
  ans3: "P",
  ans4: "O",
}, {
  qno: 9,
  question: "What is the chemical symbol of the element Tungsten?",
  sorc: "assets/pics/q10.png",
  ans1: "T",
  ans2: "U",
  ans3: "V",
  ans4: "W",
}];

//the correct answers
let answers = [questions[0].ans2,
  questions[1].ans4,
  questions[2].ans1,
  questions[3].ans2,
  questions[4].ans1,
  questions[5].ans4,
  questions[6].ans2,
  questions[7].ans3,
  questions[8].ans1,
  questions[9].ans4,
];


// place to log the clicked answer and compare to the answers array above
let selectedAnswers = [];


// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
  console.log("Loaded");
})

let startButton = document.getElementById('next-button');

startButton.addEventListener('click', loadFirstQuestion);

let currentQuestion = 0;

function loadFirstQuestion() {
  // Get references to the elements that need to be updated
  let imageElement = document.getElementById('q-pic');
  let questionElement = document.getElementById('the-question');
  let answer1Button = document.querySelector('[data-type="ans1"]');
  let answer2Button = document.querySelector('[data-type="ans2"]');
  let answer3Button = document.querySelector('[data-type="ans3"]');
  let answer4Button = document.querySelector('[data-type="ans4"]');

  // Update the elements with the first question's data
  imageElement.src = questions[0].sorc;
  questionElement.textContent = questions[0].question;
  answer1Button.textContent = questions[0].ans1;
  answer2Button.textContent = questions[0].ans2;
  answer3Button.textContent = questions[0].ans3;
  answer4Button.textContent = questions[0].ans4;
}

let answerButtons = document.querySelectorAll('.ans');

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', storeAnswer);
}
