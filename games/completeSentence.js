const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence() {

    const sentences = [
        { text: "I ____ a developer.", answer: "am" },
        { text: "She ____ coding now.", answer: "is" },
        {text: "____ can i find coffee",answer:"where"},
        {text: "Is ____ the bite of 87?",answer:"that"},
        {text:"Mr. ____, bring me a dream...",answer:"sandman"},
        {text:"So wake ____ up when its all over",answer:"me"},
        {text:"when im ____ and im wiser",answer:"older"},
        {text:"Never gonna run around and ____ you",answer:"desert"},
        {text:"Were no ____ to love",answer:"strangers"},
        {text:"You know ___ rules, and so do i",answer:"the"}
    ];

    sentences.forEach(s => {

        console.log("\nComplete:");
        console.log(s.text);

        let answer = readline.question("Word: ").toLowerCase();

        if(answer === s.answer) {
            console.log("Correct!");
            gameState.addScore(10);
        } else {
            console.log("Wrong! Correct answer:", s.answer);
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = completeSentence;