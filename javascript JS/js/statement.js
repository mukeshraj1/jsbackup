
let clientiscome=false;
let client="ordered a food";
let reply;
let takeaway=false;
if(clientiscome)
{
    reply="Welcome";
}   
else if(client && takeaway)
{
    reply =`I ${client} and takeaway`;
}
else if(client)  
{
    reply =`I ${client}`;
}
else
{
    reply="I ordered a juice";
}
console.log(reply);

// 

// let time=14;
// let greeting;
// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
// console.log(greeting);


// function checkValue(a, b) {
//     if (a === 1)
//       if (b === 2)
//         console.log("a is 1 and b is 2");
//     else
//       console.log("a is not 1");
//   }

// let player="rock"
// let computer="scissor";
// switch (player)
// {
//     case computer:
//         console.log('Tie');
//         break;
//     case "rock":
//         if(computer === "scissor")
//         {
//            console.log("player wins") 
//         }
//         else{
//             console.log("computer wins");
//         }
//         break;
//     default:
//         console.log("No Tie");
//         break;
// }



// let x = "0";
// switch (x) 
// {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);


// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// let player = "paper";
// let computer = "scissor";

// switch (player) {
//     case "rock":
//         if (computer === "scissor") {
//             console.log("player wins");
//         } else if (computer === "paper") {
//             console.log("computer wins");
//         } else {
//             console.log("Tie");
//         }
//         break;
//     case "paper":
//         if (computer === "rock") {
//             console.log("player wins");
//         } else if (computer === "scissor") {
//             console.log("computer wins");
//         } else {
//             console.log("Tie");
//         }
//         break;
//     case "scissor":
//         if (computer === "paper") {
//             console.log("player wins");
//         } else if (computer === "rock") {
//             console.log("computer wins");
//         } else {
//             console.log("Tie");
//         }
//         break;
//     default:
//         console.log("Invalid player choice");
//         break;
// }


// let pwd_correct = true;

// if (pwd_correct) {
//   console.log("You are logged in");
// } else {
//   console.log("Incorrect password");
// }

// Comparison Operators: ==  ===  !=  !==  >  <  >=  <=  ?: conditional/ternary
// Logical Operators: && || !

// age = 65;
// gender = "female";
// if (age > 60 && gender === "female")
//   console.log("You can avail special discount");

// //max of two numbers
// let a = 40, b = 30;
// let max

// if(a>b)
//   max = a
// else
//   max = b

// max = a>b?a:b


// console.log(max)


console.log("Bye");