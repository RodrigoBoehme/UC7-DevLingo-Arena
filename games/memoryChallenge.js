const readline = require('readline-sync');
const gameState = require('../gameState');

function memoryChallenge() {

    const words = ["code", "debug", "function", "variable"];

    console.log("\nMemorize these words:");
    console.log(words.join(", "));

    readline.question("\nPress ENTER when ready...");

    console.clear();

    let answer = readline.question("Type the words separated by comma: ");

    if(answer === words.join(", ")) {
        console.log("Perfect memory!");
        gameState.addScore(20);
    } else {
        console.log("Not quite!");
        gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = memoryChallenge;