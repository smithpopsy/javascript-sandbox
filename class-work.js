let myCountry = 'Nigeria';
let myAge = 30;

const fullName = firstName + lastName;
console.log(fullName);


console.log(fullName.length);
console.log(myCountry.length);
console.log(fullName.toUpperCase());

console.log(fullName.slice(0, 7));

const description = `${fullName} is a citizen of ${myCountry}`;
console.log(description);

myAge++
console.log(myAge);

console.log(100 % 7);

console.log(myCountry.startsWith('h'));






const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnsBmi = johnsMass / johnsHeight ** 2;

const markHigherBmi = marksBmi > johnsBmi;
console.log(marksBmi, johnsBmi);

console.log(markHigherBmi);


// if (markHigherBmi) {
//     console.log('Marks BMI is higher than johns');
    
// } else {
//     console.log('johns BMI is higher than marks');
    
// }

if(marksBmi > johnsBmi){
    console.log('Marks BMI is higher than johns');
}else if ( johnsBmi > marksBmi) {
    console.log('johns BMI is higher than marks');
}else{
    console.log('john and marks BMI are equal');
    
}

console.log('hello' + 6);




// nested if
let computerChoice = "paper";
let userChoice = "gun";
// paper rock scissors

if (userChoice === computerChoice) {
  console.log("This is a tie");
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("User wins, Rock smashes scissors");
  } else {
    console.log("Computer Wins, Paper covers rock");
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("User wins, paper covers rock");
  } else {
    console.log("computer wins, scissors cuts paper");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    console.log("Computer wins, rock smashes scissors");
  } else {
    console.log("User wins, scissors ccuts paper");
  }
} else {
  console.log("Invalid entry, try again");
}






//There are two gymnastics teams, dolphin and pandas
//they compete against each other 3 times
//the winner with the average score wins a trophy
//your task
//1 calculate the average score for each team
//2 compare the team's average score to determine the winner
//of the competition dont forget that there can be a draw so test for that too
//TEST DATA1
//1 dolphins score 96,108 and 89
//2 pandas score 88, 91, 110

//test data 2
//dolphinsScore1 = 97;
//dolphinsScore2 = 112;
//dolphinsScore3 = 101;

//pandasScore1 = 109;
//pandasScore2 = 95;
//pandasScore3 = 123;

let team1 = 'dolphins';
let team2 = 'pandas';

let dolphinScoreYear1 = 96;
let dolphinScoreYear2 = 108;
let dolphinScoreYear3 = 89;
let totalTeam1 = dolphinScoreYear1 + dolphinScoreYear2 + dolphinScoreYear3;
console.log(totalTeam1);

let averageTeam1 = totalTeam1 / 3;
console.log(averageTeam1);






let pandasScoreYear1 = 88;
let pandasScoreYear2 = 91;
let pandasScoreYear3 = 110;
let totalTeam2 = pandasScoreYear1 + pandasScoreYear2 + pandasScoreYear3;
console.log(totalTeam2);

let averageTeam2 = totalTeam2 / 3
console.log(averageTeam2);

console.log(`Average dolphin score is ${averageTeam1}`);
console.log(`Average panda score is ${averageTeam2}`);


if( averageTeam1 > averageTeam2){
    console.log('dolphin wins'); 
}else if (averageTeam1 < averageTeam2) { 
    console.log('panda wins');  
} else{
    console.log('this is a tie');
} 

//Bonus 
//1 include a requirement for a minimum score of 100
//with rule,  a team only wins if it has a higher than the other 
//and at the same time a score of at least 100 points
//Hint: use a logical operator to test for minimum score
//as well as multiple else-if blocks

if (averageTeam1 >= 100 && averageTeam1 > averageTeam2) {
    console.log('dolphin wins');
    
} else if (averageTeam1 >= 100 && averageTeam1 < averageTeam2) {
    console.log('panda wins');
}  else{
    console.log('No winner');
}





//bonus 2 : minimum score also applies to a draw
//so a draw only happens when both teams have the same score
//and both have a score greater or equal to 100
//otherwise no team wins

if (averageTeam1 >= 100 && averageTeam1 > averageTeam2) {
    console.log('dolphin wins');
} else if (averageTeam1 >= 100 && averageTeam1 < averageTeam2) {
    console.log('panda wins');
} else if (averageTeam1 = averageTeam2 && averageTeam1 >=100 && averageTeam2 >= 100) {
    console.log('draw');
}else{
    console.log('no winner');
}





// write a function that takes in a string and converts the first letter of every word touppercase 
 
const firstLetterToCaps = (str) => {
  const result = str.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ")
};

console.log(firstLetterToCaps('life is good'));


// write a function that checks if the parametere is a number or not 
// return true of false

const checkNumber = (arg) => {
  return typeof arg === "number"
}

console.log(checkNumber(7));


const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

//   itirate over the currency data and log a message 
//  the exchange rate for usd to ngn is 1700

currencyData.map((currencyRate) => {
  console.log(`The Exchange Rate for ${currencyRate.from} to ${currencyRate.to} is ${currencyRate.rate}`);
  
});


// write a func that returns the exchange rate for that currency pair
//or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyData to find a match
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

findCurrencyPair("YEN", "NGN");


//   write a conversion function
// 2usd
// 200 AUS
const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currencyData.find((currency) => {
      return currency.from === baseCurrency && currency.to === toCurrency;
    });

    if(pair){
      // conversion
      console.log(`${amount} ${pair.from} is equivalent to ${amount * pair.rate} ${pair.to}`)
      
    }else{
      console.log('currency pair not found');
    }
};

convertCurrency('USD', "NGN", 400);

// write a function to add to the currency data list

const toAddNewCurrency =  (baseCurrency, toCurrency, rate) => {
    const newCurrency = {
      from: baseCurrency, to: toCurrency, rate
    }
    currencyData.push(newCurrency)
    console.log(currencyData);
};

toAddNewCurrency('AUS', "NGN", 500)J
  
// or

const addNewCurrency = (from, to, rate) => {
  currencyData.push({from, to, rate})
  console.log(currencyData);
};
addNewCurrency('AUS', 'NGN', 1000)





