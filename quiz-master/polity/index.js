// Step 1: Define Quiz Data

const quizData = [
  {
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Jawaharlal Nehru",
      "Dr. B.R. Ambedkar",
      "Mahatma Gandhi",
      "Sardar Vallabhbhai Patel",
    ],
    correct: 1,
  },
  {
    question:
      "What is the minimum age required to become the President of India?",
    options: ["30 years", " 35 years", " 25 years", " 40 years"],
    correct: 1,
  },
  {
    question:
      "How many members are nominated to the Rajya Sabha by the President of India?",
    options: [
      "12",
      "15",
      "10",
      "5",
    ],
    correct: 0,
  },
  {
    question:
      "Which article of the Indian Constitution deals with the Right to Equality?",
    options: ["Article 14", "Article 15", "Article 16", "Article 17"],
    correct: 0,
  },
  {
    question: "Who appoints the Chief Justice of India?",
    options: ["Prime Minister", "Chief Justice of India himself/herself", "President", "Supreme Court judges"],
    correct: 2,
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
