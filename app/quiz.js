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
resetButton.onclick = resetGame;
const nextButton = document.querySelector('#nextButton');

let currentQuestion;
let questionsArray;

function initGame() {
    questionsArray = copyQuestionsArray(openTriviaResponse);
    currentQuestion = selectRandomQuestion(questionsArray);
    update();
}

function resetGame() {
    questionsArray = copyQuestionsArray(openTriviaResponse);
    currentQuestion = selectRandomQuestion(questionsArray);
    update();
}

function update() {
    categoryText.innerHTML = currentQuestion.category;
    difficultyText.innerHTML = currentQuestion.difficulty;
    questionText.innerHTML = currentQuestion.question;
    displayAnswers();
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
        btn.innerHTML = value;
        btn.onclick = (event) => checkAnswer(event);
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(event) {}

initGame();
