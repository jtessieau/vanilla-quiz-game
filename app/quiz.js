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

const gameOverModal = document.getElementById('gameOverModal');
const scoreText = document.getElementById('score');

let currentQuestion;
let questionsArray;
let score;

function initGame() {
    score = 0;
    questionsArray = copyQuestionsArray(openTriviaResponse);
    currentQuestion = selectRandomQuestion(questionsArray);
    gameOverModal.style.display = 'none';
    if (currentQuestion !== null) {
        update();
    } else {
        alert('A problem occured retriving questions.');
    }
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
        gameOver();
    }
}

function displayAnswers() {
    answersContainer.innerHTML = '';

    let possibleAnswers;

    if (currentQuestion.type === 'multiple') {
        possibleAnswers = shuffle([
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
        ]);
    } else {
        possibleAnswers = ['False', 'True'];
    }

    Object.values(possibleAnswers).forEach((value) => {
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
        score += 1;
    } else {
        event.target.style.backgroundColor = 'red';
    }

    const buttons = answersContainer.children;

    Object.values(buttons).forEach((element) => {
        if (element.tagName === 'BUTTON') {
            element.onclick = null;
        }
    });

    currentQuestion.answered = true;
    questionsArray = removeAnsweredQuestion(questionsArray);

    nextButton.disabled = false;
    nextButton.onclick = displayNextQuestion;
}

function removeAnsweredQuestion(questions) {
    return questions.filter((question) => question.answered !== true);
}

function gameOver() {
    gameOverModal.style.display = 'block';
    scoreText.innerText = score;
}

initGame();
