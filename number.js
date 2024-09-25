// NUMBER 9 0.5 1197
const myAge = 87;

// number methods toFixed
const num = 9.5678;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));

// + - * /
const x = 7;
const y = 7;
console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);

// **raised to the power (exponent)
console.log(3 ** 2);

// modulus %(return the reminder of a division)
console.log(2 % 2);
console.log(6 % 2);
console.log(100 % 30);

let likes = 0;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes - 1;

likes++;
likes++;
likes++;
likes--;
console.log('likes' , likes);

// likes++
// likes--

let savings = 5000;
//  savings = savings + 3000;
savings += 3000;
// savings = savings + 10000;
savings += 10000;
// 7000
// savings = savings- 7000;
savings -= 7000;
// 525
// savings = savings - 525;
savings -= 525;
console.log(savings);


const fullName ='olumide smith';
const accountNumber =264213702;
let myBalance = 4000;
// olu transaction
// credited 10000,debited 200 as sms charges, received gift 3000,gifted someone 1200

myBalance += 10000;
myBalance -= 200;
myBalance += 3000;
myBalance -= 1200;
console.log("My balance is", myBalance);

// olumide smith with account number : accountNumber has a balance of myBalance
const accountStatement =`${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}`;
console.log(accountStatement);

// NAN- not a number
console.log('hello'*6);





















