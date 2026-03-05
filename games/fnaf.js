const readline = require("readline-sync");
const gameState = require("../gameState");

function checkLifes(){
  if(gameState.getLives==0){return true}else{return false}
}
function fnafAlikeGame() {
  while (true) {
    console.log(
      "What night you wanna play? \n1) First Night\n2) Second Nigth\n3) Third Night \n0) Exit Game",
    );
    let option = readline.question("Input number: ");
    switch (option) {
      case "1":
        fnafAlike(3,5,2,1)
        if(checkLifes()){return}
        break;
      case "2":
        fnafAlike(5, 7, 3, 4);
        if(checkLifes()){return}
      break;
      case "3":
        fnafAlike(1, 9, 8, 7);
        if(checkLifes()){return}
      break;
      case "4":
        console.log("Custom Night, Set the difficulty for each animatronic: (Min: 0, Max: 10)")
        let bn=readline.questionInt("Bonnie: ")
        let fr=readline.questionInt("Freddy: ")
        let fx=readline.questionInt("Foxy: ")
        let ch=readline.questionInt("Chica: ")
        fnafAlike(bn,fr,fx,ch)
        if(checkLifes()){return}

      break;

      case "0":return;

      case "1987":
        readline.question("This is an easter egg, but you still lose tho, press enter to continue")
        gameState.loseLife();
      return;
      default:
        readline.question("Invalid input, press ENTER to continue...")
      break;
      
        
    }
  }
}

function fnafAlike(Bd, Fd, Fx, Cd) {
  let r = 0;
  let energy = 30;
  let door = true;
  let animatronics = [
    { name: "Bonnie", position: 0, path: 6, level: Bd, canAtk: false },
    { name: "Freddy", position: 0, path: 8, level: Fd, canAtk: false },
    { name: "Foxy", position: 0, path: 5, level: Fx, canAtk: false },
    { name: "Chica", position: 0, path: 6, level: Cd, canAtk: false },
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
      if (
        animatronics[aa].position >= animatronics[aa].path &&
        door &&
        animatronics[aa].canAtk
      ) {
        if (Math.floor(Math.random() * 10 + 1) <= animatronics[aa].level) {
          readline.question("You got jumpscare by " + animatronics[aa].name);
          gameState.loseLife();
          return;
        }
      } else if (
        animatronics[aa].position >= animatronics[aa].path &&
        animatronics[aa].canAtk
      ) {
        console.log(
          animatronics[aa].name + " was at the door, but it went back!",
        );
        animatronics[aa].position = 1;
        animatronics[aa].canAtk = false;
      } else if (
        animatronics[aa].position >= animatronics[aa].path &&
        !animatronics[aa].canAtk
      ) {
        animatronics[aa].canAtk = true;
      } else {
        if (Math.floor(Math.random() * 10 + 1) <= animatronics[aa].level) {
          if (Math.floor(Math.random() * 20 + 1) <= 2) {
            animatronics[aa].position++;
          }
          animatronics[aa].position++;
        }
      }
    }
    r++;

    door = true;
  }
}
module.exports = fnafAlikeGame;
