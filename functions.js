// functions are containers that hold blocks of code that we can call on at all times 
// functions are used to run snippets of code
// it is declared by the function variable
// for a function to work you need to call or invoke

function greeting() {
    console.log("Welcome to our App");
}

// invoked / called
greeting();
function speak() {
    console.log('hello class')   
}
speak();


// functions can take parameters
// functions can be reusable based on parameters that are passed with.
function specialGreeting(name = 'user') {
    console.log(`${name}, welcome to our app`);
}

specialGreeting('olumide');
specialGreeting('timi');

// default parameters
specialGreeting();

// write a function that logs the addition of two numbers
function addTwoNums(num1, num2, num3) {
    const result = num1 + num2 + num3;
    console.log(result);
}

addTwoNums(9, 5, 6);
addTwoNums(11, 2, 5);

// check if a number is either positive or negative
function checkNum(num){
    if (num > 0) {
        console.log(`${num} is postive`);
    }else if (num < 0){
        console.log(`${num} is negative`);  
    }else{
        console.log('this is zero');
    }
}

checkNum(4);
checkNum(-3);
checkNum(0);


// function expreession
myFunction1() 
function myFunction1(){
    console.log('this is a func declaration');
}


const myFunction2 = function () {
    console.log('this is a func declaration');
};
myFunction2();

//  hoisting - moves all of the function delcaration up the script 
    

// return keyword
// write a function that calculates the product of two nums
const productOfTwoNums = function(num1, num2){
    return num1 * num2  
}

const result = productOfTwoNums(7, 9) + 8;
console.log(`The result is ${result}`);


// write a function that converts km to meter
// 7km - 7 * 1000

const kmtMeter = function(value) {
    const meter = value * 1000;
    return `${value}km is equal to ${meter}m`
    // anything after a return keyword is void p.s in a block of code
};

console.log(kmtMeter(8));
console.log(kmtMeter(4.6));


// write a function taht calculates the average of 3 numbers and returns the value

const calAverage = function(num1, num2, num3){
    const average = (num1 + num2 + num2) / 3;
    return average;
}

console.log(calAverage(3, 4, 5));



// write a function that calculates the age of user , your function should take in year of birth as parameter
const calAge = function(yob , cy) {
    const age = cy - yob
    return age;
}
console.log(calAge(12, 15));

// write a function that checks if a number is even or odd

function oddOrEven(num){
    if (num % 2 === 0) {
        return 'this is a even number'
    }else{
        return 'this is an odd number'
    }
};
console.log((oddOrEven(62)));

let savings = 8900;

function checkWithdrawal(amount) {
  if (amount < savings) {
    savings -= amount;
    return `withdrawal of ${amount} is successful and my balance is ${savings}`;
  } else {
    return 'Insufficient funds';
  }
}

// console.log(checkWithdrawal(70000));
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));

console.log(`my current saving is ${savings}`);



// write a function taht depsoits an amount

function depsoitAmount(amount) {
     savings += amount;
     return`deposit of ${amount} is successful and current balance is ${savings}`
}
console.log(depsoitAmount(4600));




// build a simple atm machine
let userPin = 1234;
let savings = 40000;

// write a function that checks the enteredpin
 const checkPin = function (enteredPin) {
    if (enteredPin === userPin){
        return true;
    }else{
        return false;
    }
 };
 console.log(checkPin(1232));
 console.log(checkPin(1234));

//  write a function that does withdrawwals

const withdraw = function (amount) {
    if (checkPin(1234)) {
        //withdraw
        if (savings > amount) {
            savings -= amount;
            console.log(`The withdrawal of ${amount} is successful and your balance is ${savings}`); 
        } else{
            console.log("Insufficient Funds");
        }
    } else {
        console.log("Incorrect Pin, try again"); 
    }
}
withdraw(25000);

const deposit = function (amount) {
    if (checkPin(1234)) {
        savings += amount;
        console.log(`deposit successful and your balace is ${savings}`);
        
    } else {
        console.log('incorrect pin, try again');
    }
}

deposit(4000)

// write a function to check balance
const balance = function(){
    if (checkPin(1234)) {
        console.log(`your available is ${savings}`);
        
    }else{
        console.log('incorrect pin');
        
    }
} 

balance();


// write a function that checks the number of attempts on the pin
// max attempt is 3
let attempt = 0
let blocked = false;
// const attemptsOnPin = function(){
//     if (checkPin(7256)) {
//         console.log('perform transaction');
//     } else{
//         if(!blocked){
//             attempt++;
//             console.log(`Incorrect Pin ${3 - attempt} attempt left`);          
//         }
//         if(attempt === 3){
//             console.log('your card is blocked');
//             blocked = true;
//         }
//     }
// };

// attemptsOnPin();
// attemptsOnPin();
// attemptsOnPin();
// attemptsOnPin();



const checkCardAttempt = function () {
    if(blocked){
        console.log('your card is blocked ');
        return;
    }
    if (checkPin(1274)) {
        console.log('perform transaction');
        attempt = 0
    }else{
        attempt++;
        if (attempt === 3){
            console.log('your card is blocked');
            blocked = true;
        }else{
            console.log(`incorrect pin,${3-attempt}attempts left`);
            
        }
    }
};

checkCardAttempt();
checkCardAttempt();
checkCardAttempt();


// write a func that cheeck if an email is valid or not
// @

