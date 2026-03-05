const readline = require('readline-sync');
const gameState = require('../gameState');

function memoryChallenge() {

    const words = [
        ["code", "debug", "function", "variable"],
        ["guard","robot","pizza","bite"],
        ["triceratops","apothecary","manga","games"],
        ["attention","deficit","hyperactive","disorder"]
]
    for(let i=0;i<words.length;i++){
    console.log("\nMemorize these words:");
    console.log(words[i].join(", "));

    readline.question("\nPress ENTER when ready...");

    console.clear();
    
    let answer = readline.question("Type the words separated by comma: ");

    if(answer === words[i].join(", ")) {
        console.log("Perfect memory!");
        gameState.addScore(20);
    } else {
        console.log("Not quite!");
        gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
}
}

module.exports = memoryChallenge;