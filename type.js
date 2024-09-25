// type conversion and coersion
// type conversion means converting a data type to another data type
// string to number 
// number to string
// typeof shows the datatype

// string to number
// number constructor or parseInt

// const firstNum = 5
// const secondNum = 8

// const total = firstNum + secondNum
// console.log(total)
//
const firstNum = prompt("Enter first Number");
const secondNum = prompt("Enter a second number");

// const total = firstNum + secondNum;
// console.log(total);

const total = parseInt(firstNum) + Number(secondNum);
console.log(total);

// console.log(typeof "15");
// console.log(typeof "true");

// sting to a number
const mystr = "90";
console.log(typeof mystr);
// Number constructor, parseint
const convertedstr = parseInt(mystr);
console.log(typeof convertedstr);



// number to a string
// string constructor string 
const myNum = 89;
console.log(typeof myNum);
const convertedNum = String(myNum);
console.log(typeof convertedNum);

// type coersion
const a = 'hello';
const b = 7;
console.log(a-b);
console.log(a + b);
console.log(a / b);
console.log(a * b);










