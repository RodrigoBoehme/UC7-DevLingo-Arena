const readline = require('readline-sync');
const gameState = require('../gameState');

function sentenceBuilder() {

    const challenge = {
        words: ["developer", "is", "He", "a"],
        correct: "He is a developer"
    };

    console.log("\nReorder the words to form a sentence:");
    console.log(challenge.words.join(" | "));

    let answer = readline.question("Sentence: ");

    if(answer === challenge.correct) {
        console.log("Correct!");
        gameState.addScore(15);
    } else {
        console.log("Wrong! Correct sentence:", challenge.correct);
        gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = sentenceBuilder;