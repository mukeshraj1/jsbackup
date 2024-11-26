// var age=23;
// const vote=age>=18? "you are eligible for vote" : "you are not eligible for vote";
// console.log(vote);

// const testScore=35;
// var grade=testScore >89 ? "A"
// : testScore >79 ? "B"
// : testScore>69 ? "C"
// :"D";
// console.log(grade);

var player="scissor";
var computer="scissor";
const game= player === computer  ? "Tie"
:player=== "rock" && computer === "paper"?"Computer Wins"
:player==="scissor" && computer ==="rock"? "Computer Wins"
:player==="paper" && computer ==="scissor"?"Computer Wins"
:"Player Wins"
console.log(game);


// var player = "scissor";
// var computer = "scissor";

// const game = player === computer
//     ? "Tie"
//     : (player === "rock" && computer === "paper") ||
//       (player === "scissor" && computer === "rock") ||
//       (player === "paper" && computer === "scissor")
//     ? "Computer Wins"
//     : "Player Wins";

// console.log(game);


// let myBoolean=console.log("hi");
// console.log(myBoolean);

// let myBoolean1=alert("hi");
// console.log(myBoolean1);

// let myBoolean2=confirm("hi");//shows like boolean
// console.log(myBoolean2);

// let myBoolean3=prompt("Enter Your Name:");
// console.log(myBoolean3);

let my=prompt("enter your name:");
if(my)
{
console.log(my ?? "you didn't enter your name");
}
else
{ 
console.log("you didnt enter your name");
}
console.log(my.trim().length);









