// arrow 

const myFunction = () => {

};

// writing an arrow function to check if a password is long enough (miniumum password length should be 7)
 const passwordCheck = (value) => {
    if (value.length >= 7) {
        console.log('password is long enough');
        
    }else{
        console.log('short password');
        
    }
 };
 passwordCheck('hello@1233');

//  using ternary operator to shorten an arrow function
const passwordCheck2 = (value) => value.length >= 7 ? 'password is long enough' : 'password is short';
console.log(passwordCheck2('olumide777'));



// return keyword

// const calAverage = (num1, num2) => {
//     return (num1 + num2) / 2;
// };
// console.log(calAverage(8, 10));

//   shorten your arrow function
const calAverage = (num1, num2) => (num1 + num2) /2;

console.log(calAverage(5, 15));

const kmToMetersAgain = (value) => `${value}km is equal to ${value * 1000}`
console.log(kmToMetersAgain(8.5));


// scoping-  Global scoping and local scoping
const globalVar = "EXAMPLE"
const num5 = 90;

const example = () => {
    console.log(globalVar);

    const myValue = 90;
    console.log(myValue);
    
};

const mySavings = 9000;
const seeBalance = () => {
    const mySavings = 10000
    console.log(mySavings);
};

seeBalance();
console.log(mySavings);

const num = 8;
console.log(num);

const func1 = () => {
    const num = 89;
    console.log(num);   
};
func1();

const func2 = () => {
    const num = 12;
    console.log(num);
};
func2();

const func3 = (num = 68) => {
    console.log(num);
};

func3();


// write a function that takes in a string as a parameter
// and returns the string in all uppercase

const toUpperCase = (string) => string.toUpperCase();
console.log(toUpperCase("hello"));

// write a javascript that accepts a string as a parameter
// and  converts the first letter of the word to uppercase

const capitalizeFirstLetter = (string) =>  string.charAt(0).toUpperCase() + string.slice(1);
console.log(capitalizeFirstLetter('fola'));

// write a javascript function that accepts an argument and retuns the datatype
const checkTheDataType = (arg) => typeof arg;
console.log(checkTheDataType(true));


// write a function that returns whether a number is even ord odd
const oddOrEven = () => {
    if (num % 2 === 0) {
        return 'this is a even number'
    }else{
        return 'this is an odd number'
    }
}
console.log(oddOrEven(24));

//write a function that returns whether a number is even or odd
const evenOrOdd = (value) => value % 2 === 0 ? "this is an even number" : "this is an odd number"
console.log(evenOrOdd(9));

// write a function named minutesToHours that receives a number of minutes as parameter and returns a
// number representing the same amount of time but in hours
const minutesToHours = (minute) => minute / 60;
console.log(minutesToHours(1200));

// write a  function called longeststring that receives two strings as parameteres 
// and returns the longest of the two strings

const longestString = (string1, string2) => {
    return string1.length >= string2.length ? string1 : string2
} 
console.log(longestString('olumide', 'ayo'));


const longestString2 =(string1, string2) => (string1.length > string2.length ? string1 : string2);
console.log(longestString2('kayode','cane'));



//write a function named concat3 that receives 3 strings as parameter
//(string1, string2, string3) and an additional string named separator
//the function should concatenate the three strings
//using the provided separator and return the result


const concat3 = (stringA, stringB, StringC, separator)  => stringA + separator + stringB + StringC;
console.log(concat3('ade', 'wale', 'tunde', '#'));

// write a function that returns the square of a number 

const squareNum = (num) => (num ** 2);
console.log(squareNum(4));


// write a function call checkLoanEligibility,
// which receives an amount as a parameter and returns
// whether a user is eligible or not based on the criterion 
// the loan amount can not be more than twice the amount of savings

let savings = 60000
const checkLoanEligibility = (loanAmount) => loanAmount > savings * 2 ? 'ineligble' : 'eligible' ;
console.log(checkLoanEligibility(45000));
console.log(checkLoanEligibility(200000));
console.log(checkLoanEligibility(70000));

// write  a function that logs hello world to the console

const logHelloWorld = () => console.log('Hello, world!');

// write a function that returns 34
const figure = () => {
    return  34;
}
console.log(figure());

// write a function that returns the number of vowels in a string

const countNumberOfVowels = (str) => {
    let vowels = 'aeiou'
    let numOfVowels = 0
    const lowerCaseStr = str.toLowerCase()
    // loop over the lowerCaseStr
    for (let i = 0; i < lowerCaseStr.length; i++){
        if (vowels.includes(lowerCaseStr[i])){
            numOfVowels++;
        }
    }
    return numOfVowels;
}

console.log(countNumberOfVowels('hello world'));



function greet(student) {
    console.log('hello ' +  student);
    
}

greet("ayo");