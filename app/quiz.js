import openTriviaResponse from './data/openTriviaResponse.js';
import copyQuestionsArray from './helpers/copyQuestionsArray.js';
import selectRandomQuestion from './helpers/selectRandomQuestion.js';
import shuffle from './helpers/shuffleArray.js';

// HTML Elements
const categoryText = document.querySelector('#category');
const difficultyText = document.querySelector('#difficulty');
const questionText = document.querySelector('#question');
const answersContainer = document.querySelector('#answersContainer');
const resetButton = document.querySelector('#resetButton');
resetButton.onclick = initGame;
const nextButton = document.querySelector('#nextButton');
const counter = document.querySelector('#counter');

let currentQuestion;
let questionsArray;

function initGame() {
    questionsArray = copyQuestionsArray(openTriviaResponse);
    currentQuestion = selectRandomQuestion(questionsArray);
    update();
}

function update() {
    categoryText.innerHTML = currentQuestion.category;
    difficultyText.innerHTML = currentQuestion.difficulty;
    questionText.innerHTML = currentQuestion.question;
    displayAnswers();
    displayCounter();
}

function displayCounter() {
    const totalQuestions = openTriviaResponse.results.length;
    const current = totalQuestions - questionsArray.length + 1;

    counter.innerText = `${current}/${totalQuestions}`;
}

function displayNextQuestion() {
    currentQuestion = selectRandomQuestion(questionsArray);

    nextButton.onclick = null;
    nextButton.disabled = true;

    if (currentQuestion !== null) {
        update();
    } else {
        alert('No more questions! please reset the game.');
    }
}

function displayAnswers() {
    answersContainer.innerHTML = '';

    const possibleAnswers = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
    ];
    let answersArray = [];

    if (currentQuestion.type === 'multiple') {
        answersArray = shuffle(possibleAnswers);
    } else {
        answersArray = ['False', 'True'];
    }

    Object.values(answersArray).forEach((value) => {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('data-answer', value);
        btn.innerHTML = value;
        btn.onclick = (event) => checkAnswer(event);
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(event) {
    const answer = event.target.getAttribute('data-answer');
    if (answer === currentQuestion.correct_answer) {
        event.target.style.backgroundColor = 'green';
        event.target.onclick = null;
        event.target.setAttribute('data-guess', 'right');

        nextButton.disabled = false;
        nextButton.onclick = displayNextQuestion;

        const buttons = answersContainer.children;

        Object.values(buttons).forEach((element) => {
            if (
                element.tagName === 'BUTTON' &&
                element.getAttribute('data-guess') !== 'right'
            ) {
                element.disabled = true;
            }
        });
        currentQuestion.answered = true;
        questionsArray = removeAnsweredQuestion(questionsArray);
    } else {
        event.target.style.backgroundColor = 'red';
        event.target.onclick = null;
    }
}

function removeAnsweredQuestion(questions) {
    return questions.filter((question) => question.answered !== true);
}

initGame();
