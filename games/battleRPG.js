const readline = require('readline-sync');
const gameState = require('../gameState');

function battleRPG() {

    let enemyHP = 50;

    console.log("\nA Grammar Monster appears!");
    const quests=[
        {quest:"Past of 'go'",ans:"went"},
        {quest:"Future of 'go'",ans:"goes"},
        {quest:"Compact form of 'cannot'",ans:"cant"},
        {quest:"The Acronym AFK stands for",ans:"away from keyboard"},
        {quest:"",ans:""}
    ]

    while(enemyHP > 0) {
          
        let ChoiceThisTime=Math.floor(Math.random()*quests.length)
        console.log("\nEnemy HP:", enemyHP);
        console.log("Answer correctly to attack.");

        let answer = readline.question(quests[ChoiceThisTime].quest+": ");

        if(answer.toLowerCase() === quests[ChoiceThisTime].ans) {
            console.log("Hit!");
            enemyHP -= 10;
            gameState.addScore(10);
        } else {
            console.log("Miss! You got hit.");
            gameState.loseLife();
            break;
        }
    }

    if(enemyHP <= 0) {
        console.log("Monster defeated!");
    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = battleRPG;