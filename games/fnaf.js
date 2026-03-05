const readline = require("readline-sync");
const gameState = require("../gameState");

function fnafAlikeGame() {
  let r = 0;
  let energy = 30;
  let door = true;
  let animatronics = [
    { name: "Bonnie", position: 0, path: 6, level: 5 ,canAtk:false},
    { name: "Freddy", position: 0, path: 8, level: 7 ,canAtk:false},
    { name: "Foxy", position: 0, path: 5, level: 3 ,canAtk:false},
    { name: "Chica", position: 0, path: 6, level: 4 ,canAtk:false},
  ];

  console.clear();
  console.log(
    "A game inspired in Five nights at Freddys, you have limite \n power only one door to worry and the same 4 animatronics to\n worry about, winning condition you ask? Just survive for 25 rounds",
  );
  while (true) {
    console.log(
      "1) Check Positions \n2) Hold door closed \n3)Close door and check animatronics \n Nothing",
    );

    let opt = readline.questionInt("What are your action: ");
    console.clear();
    switch (opt) {
      case 1:
        if (energy > 0) {
          for (let a = 0; a < animatronics.length; a++) {
            console.log(animatronics[a].name + " " + animatronics[a].position);
          }
          energy--;
        } else {
          console.log("No energy to search them, Dangers lurk in the dark");
        }
        break;

      case 2:
        if (energy > 2) {
          door = false;
          energy -= 3;
        } else {
          console.log("The door cant be closed, pray no one tries to enter");
        }
        break;

      case 3:
        if (energy > 4) {
          for (let a = 0; a < animatronics.length; a++) {
            console.log(animatronics[a].name + " " + animatronics[a].position);
          }
          door = false;
          energy -= 5;
        } else {
          console.log("No energy to close the doors or check the animatronics");
        }
        break;

      default:
        console.log("Nothing, energy saved");
        break;

      case 1987:
        console.log("This is an easter egg, the game ends!");
        return;
    }
    for (let ac = 0; ac < animatronics.length; ac++) {}
    if (r == 25) {
      console.log("You survived the night");
      gameState.addScore(55);
      return;
    }

    for (let aa = 0; aa < animatronics.length; aa++) {
      if (animatronics[aa].position >= animatronics[aa].path && door&&animatronics[aa].canAtk) {
        if (Math.floor(Math.random() * 10 + 1) <= animatronics[aa].level) {
          readline.question("You got jumpscare by " + animatronics[aa].name);
          gameState.loseLife();
          return;
        }
      } else if (animatronics[aa].position >= animatronics[aa].path&&animatronics[aa].canAtk) {
        console.log(
          animatronics[aa].name + " was at the door, but it went back!",
        );
        animatronics[aa].position = 1;
        animatronics[aa].canAtk=false
      } else if(animatronics[aa].position >= animatronics[aa].path&&!animatronics[aa].canAtk){
          animatronics[aa].canAtk=true

      } 
      
      else {
        if (Math.floor(Math.random() * 10 + 1) <= animatronics[aa].level) {
          if(Math.floor(Math.random()*20+1)<=2){animatronics[aa].position++}
          animatronics[aa].position++;
        }
      }
    }
    r++;

    door = true;
  }
}
module.exports = fnafAlikeGame;
