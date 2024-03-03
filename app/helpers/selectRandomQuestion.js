export default function selectRandomQuestion(questionArray) {
    return questionArray[Math.floor(Math.random() * questionArray.length)];
}
