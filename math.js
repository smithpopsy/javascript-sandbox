//MATH OBJECT
console.log(Math.PI);
//math methods
//math.round, math.ceil,math.floor,math.trunc,math.random,math.max,math.min,math.pow,math.sqrt
console.log(Math.pow(4,4));
// 4 ** 4
console.log(Math.sqrt(9));
console.log(Math.max(9,44,5,56));
console.log(Math.min(9, 44, 5, 56));
console.log(Math.round(9.3));
console.log(Math.ceil(-1.2));
// round up
console.log(Math.floor(9.9)); 
// round down

console.log(Math.trunc(6.78));
console.log(Math.trunc(-5.78));

// random - 0-1
console.log(Math.random());

// 0-5
const randomNumber = Math.trunc(Math.random() *  6);
console.log(randomNumber);

const customers =  ['Timi', 'eniola', 'aisha', 'olumide', 'sesan' ];
const numOfCustomers = customers.length;
const randomCustomerPosition = Math.floor(Math.random() * numOfCustomers);

console.log(customers[randomCustomerPosition]);