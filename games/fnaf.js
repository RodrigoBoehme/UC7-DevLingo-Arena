const readline = require("readline-sync");
const gameState = require("../gameState");



function fnafAlikeGame() {
  let r = 0;
  let energy = 30;
  let door = true;
  let animatronics = [
    { name: "Bonnie", position: 0, path: 6, level: 5 },
    { name: "Freddy", position: 0, path: 8, level: 7 },
    { name: "Foxy", position: 0, path: 5, level: 3 },
    { name: "Chica", position: 0, path: 6, level: 4 },
  ];
  
  console.clear()
  console.log("A game inspired in Five nights at Freddys, you have limite power only one door to worry and the same 4 animatronics to worry about, winning condition you ask? Just survive for 25 rounds")
  while (true) {
    console.log("1) Check Positions \n2) Hold door closed \n Nothing");

    let opt = readline.questionInt("What are your action: ");
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
        if (energy > 0) {
          door = false;
          energy -= 3;
        } else {
          console.log("The door cant be closed, pray no one tries to enter");
        }
      break;

      case 3:

      if(energy>0){
        door=false;
        energy-=5;
      }
      break;

      

      default:
        console.log("Nothing, energy saved");
        break;

      case 1987:
        return;
    }
    for (let ac = 0; ac < animatronics.length; ac++) {}
    if (r == 25) {
      console.log("You survived the night");
      gameState.addScore(55);
      return;
    }

    for (let aa = 0; aa < animatronics.length; aa++) {
      if (animatronics[aa].position == animatronics[aa].path && door) {
        if (Math.floor(Math.random() * 10 + 1) <= animatronics[aa].level) {
          console.log("You got jumpscare by " + animatronics[aa].name);
          gameState.loseLife();
          return;
        }
      } else if (animatronics[aa].position == animatronics[aa].path) {
        console.log(animatronics[aa].name+" was at the door, but it went back!")
        animatronics[aa].position = 1;
      } else {
        if (Math.floor(Math.random() * 10 + 1) <= animatronics[aa].level) {
          animatronics[aa].position++;
        }
      }
    }
    r++;

    door = true;
  }
}
module.exports = fnafAlikeGame;
