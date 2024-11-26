// function hello(){
//     return "hello edabit.com"
// }
// console.log(hello());

//!addition
// function add(a,b){
//     return sum=a+b
// }
// console.log(add(2,3))
// console.log(add(-3,-6));
// console.log(add(7,3));


//!conversion of minutes to seconds
// function convertMinutesToSeconds(minutes){
//     return Math.floor(minutes*60)
// }
// console.log(convertMinutesToSeconds(2))
// console.log(convertMinutesToSeconds(10))

//!Return the Next Number from the Integer Passed
// function addition(num){
//     return num+1
// }
// console.log(addition(0))
// console.log(addition(9))
// console.log(addition(-3))

//!Area of a Triangle 
//?The area of a triangle is: (base * height) / 2
// function AreaOfTriangle(a,b){
//     return (a*b)/2
// }
// console.log (AreaOfTriangle(3,2));
// console.log(AreaOfTriangle(7,4));
// console.log(AreaOfTriangle(10,10));

//!Convert Age to Days
// function calcAge(age){
//     return age*365
// }
// console.log(calcAge(23))
// console.log(calcAge(0))
// console.log(calcAge(65))
// console.log(calcAge(20))

//!cube conversion
// function cubes(num){
//     return Math.pow(num,3)
// }
// console.log(cubes(3));
// console.log(cubes(5));
// console.log(cubes(10));

// function cubes(num){
//     return num ** 4
// }
// console.log(cubes(5));

//!Return the First Element in an Array
//?arr.shift , arr[0]
// function getFirstValue(arr){
//     return arr.shift() || arr[0]
// }
// console.log(getFirstValue([1,23,2]))
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));


//!Power Calculator
//?Power (P) = Voltage (V) × Current (I)
// function circuitPower(voltage,power){
//     return voltage*power
// }
// console.log(circuitPower(230, 10));

//!convert hours into seconds
// function howManySeconds(hour){
// return hour*60*60
// }
// console.log(howManySeconds(2))
// console.log(howManySeconds(10));

//!Maximum Edge of Triangle
// function nextEdge(a,b){
//     return (a+b)-1
// }
// console.log(nextEdge(8,10))


//!Return the Remainder from Two Numbers
// function remainder(a,b){
//     return a%b
// }
// console.log(remainder(1,3));

//!Perimeter of a rectangele
// //? P = 2*(L + W)
// function findRectangle(l,w){
//     return 2*(2+9)
// }
// console.log(findRectangle(2,9));

//!
// function giveMeSomething(a){
//     console.log( "something " + a)  
// }
// giveMeSomething("Mukesh")


//!
// function squared(a){
//     return a*a
// }
// console.log(squared(100))

//!Is the Number Less than or Equal to Zero?
// function lessThanOrEqualToZero(a)
// {
//     if(a<=0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(lessThanOrEqualToZero(1234567))


//!For understanding return statement 
// function add(a,b){
//     return ++a
// }
// console.log(add(1));

// function sumPolygon(a){
//     return (a-2)*180
// }
// console.log(sumPolygon(3));

// function calculatePoints(twoPointers, threePointers){
//     return (twoPointers*2)+(threePointers*3)
// }
// console.log(calculatePoints(1,1));


// function nameString(name){
//     return "Edabit "+ name
// }
// console.log(nameString("mukesh"));

// function lessThan100(a,b){
//     if(a+b < 100){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(lessThan100(220,15));

//!Pair Management
//?Given two arguments, return an array which contains these two arguments
// function makePair(num1,num2){
//     return [num1,num2]
// }
// console.log(makePair(1,2));


//!Drop the First Elements of an Array
// function drop(arr,n) {
// 	// if(n<=0){
//     //     return arr.slice()
//     // }
//     // if(n>=arr.length){
//     //     return "Mukesh"
//     // }
//     return arr.slice(n)
// }
// console.log(drop([1, 2, 3], 1));
// console.log(drop([1, 2, 3], 2));
// console.log(drop([1, 2, 3], 5));
// console.log(drop([1, 2, 3], 0));


// function drop(arr, val = 1) {
//     // If val is 0 or negative, return a copy of the entire array
//     if (val <= 0) {
//       return arr.slice();
//     }
  
//     // If val is greater than or equal to the array length, return an empty array
//     if (val >= arr.length) {
//       return [];
//     }
  
//     // Return the array starting from index `val`
//     return arr.slice(val);
//   }
  
//   // Test cases:
//   console.log(drop([1, 2, 3], 1));  // ➞ [2, 3]
//   console.log(drop([1, 2, 3], 2));  // ➞ [3]
//   console.log(drop([1, 2, 3], 5));  // ➞ []
//   console.log(drop([1, 2, 3], 0));  // ➞ [1, 2, 3]
//   console.log(drop([1, 2, 3]));     // ➞ [2, 3] (default 1 element dropped)
  

//!Upvotes vs Downvotes
// function getVoteCount(votes){
//     return votes.upvotes-votes.downvotes
// }
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));  
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); 


// !Reverse an Array
// function reverse(arr){
//     return arr.reverse()
// }
// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));

//! Simple Array Manipulation
// function incrementItems(arr){
//     return arr.map(item => item + 1)
//     // for (let i = 0; i < arr.length; i++){
// 	// 	arr[i] = arr[i] + 1
//     // }
// 	// return arr
// }
// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8]));
// console.log(incrementItems([-1, -2, -3, -4]));

// !ES6: Destructuring Arrays I
// const arr = [1, 2, 3, 4, 5, 6]
// // let a = arr[0]
// // let b = arr[4]
// let [a,b]=arr

// console.log(a) 
// console.log(b) 

//!Return the Last Element in an Array
// function getLastItem(arr){
//     return arr[arr.length-1]
// }
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));  
// console.log(getLastItem([true, false, true])); 

//!Convert an Array to a String
// function arrayToString(arr){
//     return `"${arr.join("")}"`
//     // return arr.join("")
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

//!Concatenating Two Integer Arrays
// function concat(arr1,arr2){
//     // return arr1.concat(arr2)
//     return [...arr1, ...arr2];  //Spread Operator
// }
// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]) );
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// !Find the Index
// function findIndex(arr,String){
//     return arr.indexOf(String)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));  
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));  

// !Array Indexing
// function valueAt(arr,i){
//     return arr[Math.floor(i)]
// }
// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));  
// console.log(valueAt([1, 2, 3, 4, 0], 6.535355314 / 2));  


//!Find the Index
// function search(arr,index){
//     return arr.indexOf(index)
// }
// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}  
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));