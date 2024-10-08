//COMPLEX DATATYPE
//Arrays are complex datatypes and are denoted by square barracksand can hold more than one variable and they usually contain the same data type but this doesnt mean they cant contain multiple data types
//[element1, element2]

const students = ["Goodness", "Aisha", "Adura"]
 const mixedArr = [9, "str", true, 65, null]
 //can even hold a nested array
 const mixedArr2 = [ 8, "str", true, null, [90, false]]

 //ARRAY PROPERTIES 
 //LENGTH PROPERTIES : returns the number of elements in an array
 console.log(students.length);
 //getting element in an array(position)
 //arrName[position]
 console.log(students[2]);
 //You can also change an element in an array
 students[1] = "John Doe"
 console.log(students);

 //ARRAY METHODS
 //adding and removing elements from an array
 //they are pop method, push method,shift method, and unshift method
 //LIFO(last in, first out)
 //PUSH method adds an element to an array but at the end
 students.push("Theressa")
 students.push("Eniola")
 console.log(students);

 //POP methods removes an element from an array but from the end and at the same return it
 students.pop()
 console.log(students);
 students.pop()
 console.log(students);
 students.pop()
 console.log(students);
 console.log(students.pop());
 console.log(students);

//SHIFT and UNSHIFT
//UNSHIFT adds a new element but to the front
students.unshift("Adedayo")
console.log(students);
//SHIFT removes an elememt but from tye front
students.shift()

students.unshift("Timi")
console.log(students);

//How to convert an array to a string
//there are two methods AND they are toString and join
//toString
console.log(students.toString());
//join method converts elements and joins them using a provided separator and if a separator is omitted it joins using a comma automatically
console.log(students.join("*"));

//ARRAY CONCAT
const onlineStudents = ["John","Peter", "Paul"]
const weekdayStudents = ["Ade", "Susan", "Joy"]
//we can also concat more than one array at a time
const allStudents = onlineStudents.concat(weekdayStudents, ["Ruth", "Gift"])
console.log(allStudents);

//INCLUDES
//checks if an element is in an arrayand returns either true or false
console.log(onlineStudents.includes("Ade"));

//SORT , REVERSE
//SORT method arranges elements in an array in alphabetical order
const carBrands = ["Toyota", "Benz", "BMW", "Tesla", "Audi"]
console.log(carBrands);
console.log(carBrands.sort());
//to sort from z-a
const peoplesName = ["ziggi","Samson","Niyi","Ademola"]
// const aToZ = peoplesName.sort()
// console.log(aToZ);
const zToA = peoplesName.sort((a,b)=> b -a)
console.log(zToA);

//REVERSE method reverses the arrangement in array (it isnt the opposite of sort)
console.log(carBrands.reverse());

//How to extract portions of an array
//SLICE(start, end (not included))
const friends = ["Ola", "Timi", "John", "Jane"]
console.log(friends.slice(0,2));

//SPLIT
//it divides an element of a string and returns it as an array
let text = "hello world is fun"
console.log(text.split(" "));
let text2 = "gwagwalada"
console.log(text2.split(""));
console.log(text2.split("a"));

//write a function that reverses a string
const reverseStr = (str) => str.split("").reverse().join("")
console.log(reverseStr("hello"));

//higher order array methods/ callback functions/iterator
//FOR OF METHOD
//it allows us to iterate over elements in an array and returns them individually
const fruits = ["Oranges","Mangoes","Pears","Grapes"] 
for (const fruit of fruits) {
  console.log(fruit);
}
//other higher array methods are find,filter,forEach,map,reduce,every,some
//FOREACH METHOD
//it executes a function for each elements in an array
const customers = ["Tinuke", "Peter", "Seyi", "Paula", "Temiloluwa"]
customers.forEach((customer, index)=>{
  console.log(customer, index);
})
//MAP METHOD
//it creates a new array with transformed element
const nums = [4,5,6,7]
const transformedNums = nums.map((num)=>{
  return num * 2
})
console.log(transformedNums);
//FIND METHOD
//it returns the first matching element in an array
const mySpecialNum = nums.find((num)=>{
  return num > 5
}) 
console.log(mySpecialNum);
//FILTER 
//it retruns all the elements that fit a search condition in an array
const allMySpecialNums = nums.filter((num)=> num >= 5)
console.log(allMySpecialNums);

let myBalance = 8000
const transactions = [4000,-125,10000,-5000,-2000,1500]
//generate a simple bank statement for every debit and credit alert
transactions.map((transaction)=>{
  if (transaction > 0) {
    console.log(`You have been credited with ${transaction} Naira`);    
  } else{
    console.log(`You have been debited ${transaction} Naira`);
  }
})
transactions.map((transaction)=>{
  myBalance += transaction
})
console.log(myBalance);

const myCreditTransactions = transactions.filter((transaction)=> transaction > 0)
console.log(myCreditTransactions);

const myDebitTransactions = transactions.filter((transaction)=> transaction < 0)
console.log(myDebitTransactions);

const maxTransaction = 50000
//find if there is any transaction close to that maxTransaction
transactions.push(100000)
const specialTransaction = transactions.find((transaction)=> transaction >= maxTransaction)
console.log(specialTransaction);

//EVERY
//it checks if ALL elements satisfy a condition and returns either true orfalse
const ages = [20,42,61,81,12]
const allAdults= ages.every((age)=> age >= 18)
console.log(allAdults);

//SOME
//it checks if at least 1 element satisfies a condition and returns either true or false
const someChildren = ages.some((age)=> age < 18)
console.log(someChildren);

//REDUCE
//it is used for accumulating numbers
const cartPrices = [25000, 32000, 15000, 4000, -2500]
const cartTotal = cartPrices.reduce((previous,current)=>{
  return previous + current
},3000) 
console.log(cartTotal);

const prices = [2000,5900,2990,3882]
const highestToLowest = prices.sort((a,b)=> b - a)
console.log(highestToLowest);
const lowestToHi9ghest = prices.sort((a,b)=> a - b)
console.log(lowestToHi9ghest);


// array.isarray - checks if a variable is array or not
console.log(Array.isArray(45));
console.log(Array.isArray[]);

// array.from - changes a datatype to an array
console.log(Array.from('123'));

// indexof, lastindexof
const arr = ['ade', 'john', 'jane', 'ade'];
console.log(arr.indexOf('ade'));
console.log(arr.lastIndexOf('ade'));


// delete
console.log(arr);
delete arr[1];
console.log(arr);



// findindex - position of the element that matches a search condition
const arr2 = [5, 6, 7, 8, 120, 500, 56];
const theIndexis = arr2.findIndex((num) => num > 100);
console.log(theIndexis);


