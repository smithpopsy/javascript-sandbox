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










