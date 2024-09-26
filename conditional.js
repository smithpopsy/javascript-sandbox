// conditional statement -used to perform an action based on the condition
// control flow

const myBalance = 30000;
const transaction = 9000;

//  IF statement
// if (condition)
// lines of code
// }
if(true){
    console.log('yes');
}

if (myBalance > transaction) {
    console.log('Transactional successful');
}

const age = 25;
 
if (age >= 18) {
    console.log('Eligible to vote');
    
}

// if the length of the password is 7 and above and contain special @ - good pasword 
const password = '@ade334478';
if (password.length > 7 && password.includes('@')) {
    console.log('Good password');
}


// IF else statement
// if (condition){
//  first action
// }
// 
// else{
//  second condition
// }

const age2 = 15;
// eligible 18  or not

if (age2 >= 18) {
    console.log('Eligible to vote');
    
} else {
    console.log('you are ineligible to vote, you must be 18+');   
}

// youth/underage 0-40 or aged 41
const age3 = 40;
if (age3 >= 0 && age3 <= 40) {
    console.log('you are in the youth/underage category');
} else {
    console.log('you are in aged category');
}

// write an if else statement to  check if a number is even or odd number and log to the console

const num2 = 3 ;
if (num2 % 2 === 0) {
    console.log(num2 + ' is even');
    
} else {
    console.log(num2 + ' is odd');
}

// declare two variables 1. savings 2. transaction amount
//  write an ifelse statement to check if transaction will be successful  or not
// 
 let savings = 9000;
 let transactionAmount =7000;

 if (savings >= transactionAmount ) {
    console.log('Transaction successful');
    
 } else {
    console.log('insufficient funds');
    
 }

//  multiple condition
// positive > 0 negative < 0 and zero
let myNum = 24;
if (myNum > 0) {
    console.log('This is a positive number');
} else if(myNum < 0) {
    console.log('This is a negative number');
}else{
    console.log('This is zero');
}


// underage 0-12, teens 13-19, adults 20 aged 41
const age4 = -30;
if(age4 >= 41){
    console.log('aged');
}else if( age4 >= 20){
    console.log('adult');
}else if( age4 >= 13 ){
    console.log('teen');
} else if( age4 >= 0){
    console.log('underage');   
}else {
    console.log('invalid age'); 
} 



// switch statement- are used to perfoem different actions based on different conditions
// a - excellent , b - very good 

let grade = 'A'
switch (grade) {
    case "A":
    case "a":
      console.log("Excellent");
      break;
    case "B":
    case "b":
      console.log("Very Good");
      break;
    case "C":
    case "c":
      console.log("Good");
      break;
    case "D":
    case "d":
      console.log("Fair");
      break;
    case "E":
    case "e":
      console.log("Poor");
      break;
    case "F":
    case "f":
      console.log("Failed");
      break;
    default:
      console.log("ivalid grade");
      break;
  }