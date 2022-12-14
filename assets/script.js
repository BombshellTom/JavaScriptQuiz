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
  
  
  // Wait for the DOM to finish loading before running the game
  // change "Next Q" button to "Start"
  
  document.addEventListener("DOMContentLoaded", function() {
        console.log("Loaded");
      })
      let nextBtn = document.getElementById('next-button');
      nextBtn.addEventListener('click', function() {
        console.log('The NextBtn was pressed')
        
        // get the first question from the questions array
        for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
  
    // update the HTML elements with the information from the current question
      document.getElementById('question-text').innerHTML = question.question;
      document.getElementById('question-image').src = question.sorc;
      document.getElementById('answer-1').innerHTML = question.ans1;
      document.getElementById('answer-2').innerHTML = question.ans2;
      document.getElementById('answer-3').innerHTML = question.ans3;
      document.getElementById('answer-4').innerHTML = question.ans4;
  
        // update the HTML elements with the information from the first question
        let questionBox = document.querySelector('.the-question p');
        questionBox.innerText = firstQuestion.question;
  
        let qPic = document.getElementById('q-pic');
        qPic.src = firstQuestion.sorc;
  
        let answer1Btn = document.querySelector('.ans[data-type="ans1"] p');
        answer1Btn.innerText = firstQuestion.ans1;
  
        let answer2Btn = document.querySelector('.ans[data-type="ans2"] p');
        answer2Btn.innerText = firstQuestion.ans2;
  
        let answer3Btn = document.querySelector('.ans[data-type="ans3"] p');
        answer3Btn.innerText = firstQuestion.ans3;
  
        let answer4Btn = document.querySelector('.ans[data-type="ans4"] p');
        answer4Btn.innerText = firstQuestion.ans4;
  
        nextBtn.innerText = "Next Question";
  
      };