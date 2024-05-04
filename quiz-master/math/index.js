// Step 1: Define Quiz Data

const quizData = [
  {
    question: "What is the value of 3/4 divided by 5/6 ?",
    options: [
      "9/20",
      "15/8",
      "18/25",
      "3/5",
    ],
    correct: 3,
  },
  {
    question:
      "In an A P ,if d= -4 , n= 7, an = 4 then a is ",
    options: ["6", "7", "20", "28"],
    correct: 0,
  },
  {
    question:
      "What is the area of a circle with a radius of 7 cm?",
    options: [
      "14 Pi cm sq",
      "49 Pi cm sq",
      "98 Pi cm sq",
      "21 Pi cm sq",
    ],
    correct: 1,
  },
  {
    question:
      "If 3/x = 4/y and x=6, what is the value of y?",
    options: ["y=4", "y=8", "y=9", "y=12"],
    correct: 1,
  },
  {
    question: "If a+b=10 and a-b=4, what is value of a^2-b^2?",
    options: ["40", "60", "80", "100"],
    correct: 3,
  },
];

//? Step 2: JavaScript Initialization

const answersElem = document.querySelectorAll(".answer");
console.log(answersElem);
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );
// console.log(option_2);
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];

  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  //  To get all the options
  options.forEach((curOption, index) => {
    // It is a dynamic way of accessing DOM elements.
    return (window[`option_${index + 1}`].innerText = curOption);
  });
};

loadQuiz();

//? Step 4: Get Selected Answer Function on Button click

const getSelected = () => {
  const answerElement = Array.from(answersElem);
  return answerElement.findIndex((curOption) => curOption.checked);
};

const deselectAnswers = () => {
  answersElem.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelected();
  console.log(selectedOptionIndex);

  //   let's check if the answer is correct or not
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  //   lets increment the currentQuiz value to get the next array elem
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulations on completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
  `;
  }
});
