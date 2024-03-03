export default function selectRandomQuestion(questionArray) {
    if (questionArray.length > 1) {
        return questionArray[Math.floor(Math.random() * questionArray.length)];
    }

    return null;
}
