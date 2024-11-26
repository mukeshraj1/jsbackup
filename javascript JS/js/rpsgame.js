// let playGame = confirm("shall we play rock,paper, or scissors");
// if (playGame)
// {
//     let playerChoice=prompt("please enter the rock,paper,or scissors");
//     if(playerChoice)
//     {
//         let playerOne=playerChoice.trim().toLowerCase();
//         if 
//         (
//             playerOne==="rock" ||
//             playerOne==="paper"||
//             playerOne==="scissors"
//         )
//         {
//             let computerChoice=Math.floor(Math.random()*3 +1);
//             let computer=computerChoice ===1 ? "rock"
//               :computerChoice===2 ? "paper"
//               :"scissors";

//             let result=playerOne===computer ? "Tie"
//             :playerOne === "rock"  &&  computer ==="paper"
//             ?`playerOne:${playerOne}\ncomputer:${computer}\nComputer Wins`
//             :playerOne === "paper"  && computer ==="scissors"
//             ?`playerOne:${playerOne}\ncomputer:${computer}\nComputer Wins`
//             :playerOne === "scissors"  && computer === "rock"
//             ?`playerOne:${playerOne}\ncomputer:${computer}\nComputer Wins`
//             :`playerOne:${playerOne}\ncomputer:${computer}\nPlayer Wins`
//             alert(result);
//             let playAgain=confirm("Play Again");
//             playAgain ? location.reload() : alert("OK, thanks for playing.");    
//         }
//         else
//         {
//             alert("you didn't enter rock,paper, or scissors.");
//         }
//     }
//     else
//     {
//         alert("I guess you changed your mind,Maybe next time.");
//     }
     
// }
// else
// {
//     alert("Ok,maybe next time.");
// } 




// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };
  
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
  };
  
  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
  };
  
  const evaluatePlayerChoice = (playerChoice) => {
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      return false;
    }
  };
  
  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
  };
  
  const determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };
  
  const displayResult = (result) => {
    alert(result);
  };
  
  const askToPlayAgain = () => {
    return confirm("Play Again?");
  };
  
  const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
  };
  
  initGame();