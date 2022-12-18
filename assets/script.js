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

//name start/nxt question button
let startButton = document.getElementById('next-button');

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
  console.log("Loaded");
  document.getElementById("next-button").textContent="Start";
})

let currentQuestionIndex = -1;

function displayQuestion() {
  let question = questions[currentQuestionIndex];

  // Update the question text and picture
  document.getElementById("the-question").textContent = question.question;
  document.getElementById("q-pic").src = question.sorc;
  // Update the answer buttons
  document.getElementById("answer-1").textContent = question.ans1;
  document.getElementById("answer-2").textContent = question.ans2;
  document.getElementById("answer-3").textContent = question.ans3;
  document.getElementById("answer-4").textContent = question.ans4;

  // Update the text of the "Next Question" button
  if (currentQuestionIndex === questions.length - 1) {
    document.getElementById("next-button").textContent = "Finish";
  } else {
    document.getElementById("next-button").textContent = "Next Question";
  }
}

// Add a click event listener to the "Next Question" button
document.getElementById("next-button").addEventListener("click", function() {
  // Increment the current question index
  currentQuestionIndex++;

  // If we have reached the last question, reset the index to 0
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
  }

  // Display the next question
  displayQuestion();
  // Check if the selected answer is correct
  checkAnswer();
});

// Get all the answer buttons
let answerButtons = document.querySelectorAll(".ans");

function checkAnswer() {
  let correctAnswer = answers[currentQuestionIndex];

  if (selectedAnswer === correctAnswer) {
    // Answer is correct
    console.log("Correct!");
    alert('Correct!')
  } else {
    // Answer is incorrect
    console.log("Incorrect!");
    alert('Alas, sadly not')
  }
}

// Add an event listener to each button
answerButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the selected answer from the button's data attribute
    let selectedAnswer = button.dataset.type;

    // Add the selected answer to the list of selected answers
    selectedAnswers.push(selectedAnswer);


  });
});

function checkAnswer() {
  let correctAnswer = answers[currentQuestionIndex];

  if (selectedAnswer === correctAnswer) {
    // Answer is correct
    console.log("Correct!");
  } else {
    // Answer is incorrect
    console.log("Incorrect!");
  }
}

function updateScores() {
  let scoreElement = document.getElementById("score");
  let incorrectElement = document.getElementById("incorrect");

  let currentScore = parseInt(scoreElement.textContent);
  let currentIncorrect = parseInt(incorrectElement.textContent);

  scoreElement.textContent = currentScore + 1;
  incorrectElement.textContent = currentIncorrect + 1;
}
