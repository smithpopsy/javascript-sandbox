// Loops/iteration/recursion ways to run repititive tasks
// for loop , while loop , do-while loop

// For (initializer; condition; increment){line of code}
// infiniteloop

for (let i = 0; i < 10; i++) {
    console.log('loop');
}

// write a loop that return the sum of natrual numbers between 0 and 3
let sum = 0;
for (let i = 0; i <= 3; i++) {
   sum += i; 
}
console.log(sum);

// while, initializer , while(condition) {
//increment
//}

let y = 0;
 while (y <= 5) {
    console.log('In the loop');
    
    y++;
 }

 let num = 0;
 while (num <= 6) {
   console.log('In the loop');
   

   num++;
 }

// do while loop-
//perform the action once at least whether condition is t or f

let x = 5;
do {
  console.log("I am in the loop");
  x++;
} while (x <= 2);

// type conversion and type coercion
// functions