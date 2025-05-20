const questions = [
  {
    question: "Qual orixá é associado à justiça e aos trovões?",
    options: ["Oxum", "Xangô", "Ogum", "Iansã"],
    answer: "Xangô"
  },
  {
    question: "Qual é o orixá das águas doces e do amor?",
    options: ["Oxóssi", "Iemanjá", "Oxum", "Nanã"],
    answer: "Oxum"
  },
  {
    question: "Ogum é conhecido como o orixá de:",
    options: ["Caça", "Sabedoria", "Tecnologia e Guerra", "Mar"],
    answer: "Tecnologia e Guerra"
  },
  {
    question: "Qual orixá é considerada a mãe de todos os orixás?",
    options: ["Oxum", "Iansã", "Nanã", "Obá"],
    answer: "Nanã"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const quizBox = document.getElementById("quiz-box");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  let message = "";
  if (score === questions.length) {
    message = "Incrível! Você acertou todas!";
  } else if (score >= questions.length / 2) {
    message = "Muito bem! Mas dá pra melhorar.";
  } else {
    message = "Vamos estudar mais sobre os orixás!";
  }

  scoreEl.textContent = `${message} Pontuação: ${score}/${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
}

// Iniciar
loadQuestion();
