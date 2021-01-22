const quizDB = [
  {
    question: "Q1: What is the full form of HTML",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },

  {
    question: "Q2: What is the full form of CSS",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartton Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },

  {
    question: "Q3: What is the full form of HTTP",
    a: "Hypertext Transfer Product",
    b: "Hypertext Test Protocol",
    c: "Hey Transfer Protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JordanShoes",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.getElementById("showScore");
const toggleBtn = document.querySelector(".toggle-btn");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionSelected = quizDB[questionCount];
  question.innerHTML = questionSelected.question;

  option1.innerText = questionSelected.a;
  option2.innerText = questionSelected.b;
  option3.innerText = questionSelected.c;
  option4.innerText = questionSelected.d;
};

loadQuestion();

const getAnsewerId = () => {
  let answer;
  answers.forEach((element) => {
    if (element.checked) {
      answer = element.id;
    }
  });

  return answer;
};

const deselectAll = () => {
  answers.forEach((element) => {
    element.checked = false;
  });
};

submit.addEventListener("click", () => {
  const selectedAns = getAnsewerId();
  console.log(selectedAns);

  if (selectedAns === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  if (questionCount < quizDB.length) {
    deselectAll();
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove("scoreArea");
  }
});

toggleBtn.addEventListener("click", () => {
  document.querySelector("main").classList.toggle("dark");
  toggleBtn.classList.toggle("dark");
});
