const readline = require("readline-sync");
const gameState = require("../gameState");

function sentenceBuilder() {
  const challenge = [
    {
      words: ["developer", "is", "He", "a"],
      correct: "He is a developer",
    },
    {
      words: [],
      correct: "",
    },
    {
      words: ["gonna", "Never", "up", "you", "give"],
      correct: "Never gonna give you up",
    },
    {
      words: ["that", "bite", "the", "of", "87?", "Is"],
      correct: "Is that the bite of 87?",
    },
  ];

  for (let i = 0; i < challenge.length; i++) {
    console.log("\nReorder the words to form a sentence:");
    console.log(challenge[i].words.join(" | "));

    let answer = readline.question("Sentence: ");

    if (answer === challenge[i].correct) {
      console.log("Correct!");
      gameState.addScore(15);
    } else {
      console.log("Wrong! Correct sentence:", challenge[i].correct);
      gameState.loseLife();
    }

    readline.question("\nPress ENTER to continue...");
    console.clear();
  }
}

module.exports = sentenceBuilder;
