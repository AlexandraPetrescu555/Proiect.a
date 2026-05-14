const quiz = [

  {
   question: "1. Utilizând metoda backtracking se generează permutările cuvântului info. Dacă primele trei soluţii generate sunt: fino, fion, fnio care este cea de-a cincea soluţie?",
        answers: [
          { text: "fnoi", correct: false },
          { text: "foni", correct: false },
          { text: "foin", correct: true },
          { text: "ifon", correct: false }
    ]
  },

  {
    question: "2. Folosind cifrele {1,2,3} se generează, în ordinea crescătoare a valorii, toate numerele pare formate din trei cifre distincte. Astfel, se obţin în ordine, numerele: 132, 312. Folosind aceeaşi metodă, se generează numerele pare formate din patru cifre distincte din mulţimea {1,2,3,4}. Care va fi al 4-lea număr generat??",
        answers: [
          { text: "2134", correct: false },
          { text: "1432", correct: true },
          { text: "	2314", correct: false },
          { text: "	1423", correct: false }
    ]
  },

  {
   question: "3. Utilizând metoda backtracking se generează în ordine lexicografică cuvintele de câte patru litere din mulţimea A={a,b,c,d,e}, cuvinte care nu conţin două vocale alăturate. Primele opt cuvinte generate sunt, în ordine: abab, abac, abad, abba, abbb, abbc, abbd, abbe.

Câte dintre cuvintele generate încep cu litera b şi se termină cu litera e?",
        answers: [
          { text: "	0", correct: false },
          { text: "15", correct: true },
          { text: "12", correct: false },
          { text: "20", correct: false }
    ]
  },

  {
   question: "4. Pentru a planifica în orarul unei şcoli, la clasa a XI-a, 4 ore de informatică în zile lucrătoare diferite din săptămână, câte o singură oră pe zi, se poate utiliza un algoritm echivalent cu algoritmul de generare a:?",
        answers: [
          { text: "permutărilor de 4 elemente", correct: false },
          { text: "aranjamentelor de 4 elemente luate câte 5", correct: false },
          { text: "	
aranjamentelor de 5 elemente luate câte 4", correct: false },
          { text: "	
combinărilor de 5 elemente luate câte 4", correct: true }
    ]
  },

  {
    question: "5. Utilizând metoda backtracking se generează toate cuvintele de câte 3 litere din mulţimea {a,b,c}. Dacă primele patru cuvinte generate sunt, în acestă ordine: aaa, aab, aac, aba, care este cel de-al optulea cuvânt generat?",
        answers: [
          { text: "acb", correct: false },
          { text: "acc", correct: false },
          { text: "aca", correct: true },
          { text: "	bca", correct: false }
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
