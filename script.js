<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="quiz-box">
    <h2 id="question"></h2>
    <div id="answers"></div>
    <button id="nextBtn">
      Următoarea întrebare
    </button>
    <div id="result"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>

⸻

style.css

body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  padding: 40px;
}
.quiz-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
h2 {
  margin-bottom: 20px;
}
.answer {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #ddd;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}
.answer:hover {
  background: #ccc;
}
.correct {
  background: #4CAF50 !important;
  color: white;
}
.wrong {
  background: #f44336 !important;
  color: white;
}
#nextBtn {
  margin-top: 20px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #2196F3;
  color: white;
  cursor: pointer;
  font-size: 16px;
  display: none;
}
#nextBtn:hover {
  background: #1976D2;
}
#result {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

⸻

script.js

const quiz = [
  {
    question: "1. Care este capitala României?",
    answers: [
      { text: "Cluj-Napoca", correct: false },
      { text: "Iași", correct: false },
      { text: "București", correct: true },
      { text: "Timișoara", correct: false }
    ]
  },
  {
    question: "2. Cât face 7 + 5?",
    answers: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "15", correct: false }
    ]
  },
  {
    question: "3. Ce limbaj folosim pentru stilizarea paginilor web?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "4. Care planetă este cunoscută drept Planeta Roșie?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Marte", correct: true },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "5. Ce limbaj rulează în browser pentru interactivitate?",
    answers: [
      { text: "C++", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false }
    ]
  }
];
let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");
function loadQuestion() {
  answersElement.innerHTML = "";
  nextBtn.style.display = "none";
  const q = quiz[currentQuestion];
  questionElement.innerText = q.question;
  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer");
    button.onclick = () => checkAnswer(button, answer.correct);
    answersElement.appendChild(button);
  });
}
function checkAnswer(button, isCorrect) {
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach(btn => {
    btn.disabled = true;
  });
  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }
  nextBtn.style.display = "inline-block";
}
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    questionElement.innerText = "Quiz terminat!";
    answersElement.innerHTML = "";
    nextBtn.style.display = "none";
    resultElement.innerText =
      "Ai răspuns corect la " + score + "/" + quiz.length + " întrebări.";
  }
}
nextBtn.addEventListener("click", nextQuestion);
loadQuestion();
