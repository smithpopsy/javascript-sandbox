// data types
// 1. primitive datatype- they hold only one value at a time
// 2. complex datatype-they hold more than one value at a time 

// primitive datatype- strings,number, boolean, null, undefined
// complex datatypes- complex, objects and arrays

// strings- these are text characters, to recognize a string they put in a quotation mark ('' or "")
const firstName = 'olumide'
const lastName = "smith"
console.log(firstName);
console.log(lastName);

// string properties-lenght :
//  string.lenght
console.log(firstName.length);
console.log(lastName.length);
// concatenation (joining)
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

//  STRING METHODS
// string methods -are functions that can be performed on strings 
//To uppercase
console.log(fullName.toUpperCase());
// To lowercase
console.log(fullName.toLowerCase());
// replace and replaceALL
console.log(fullName.replace("olumide","*"));
console.log(fullName.replaceAll("i", "*"));
// includes
console.log(fullName.includes("h"));
// startswith Endswith
console.log(fullName.startsWith("o"));

const myEmail = "olumidesmith17@gmail.com";
console.log(myEmail.length)
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith('google.com'));

// indexOf, lastIndexof
console.log(myEmail.indexOf('o'));
console.log(myEmail.lastIndexOf('o'));

console.log(myEmail.charAt(5));

// concat
console.log(myEmail.concat('example'));

// trimming
const userName = '    user001    '
console.log(userName.length);
console.log(userName.trim());

// trimStart trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portions of a string
// slice, substring, substr
// slice( start, end(not inclusive)) 'same with substring'
// substr (start, number of characters you want)
const surname = 'Sandler'
console.log(surname.slice(0, 4));
console.log(surname.substring(1, 4));
console.log(surname.substr(1, 4));

const author = 'Ngozi Adichie';
const bookTitle = 'Americanah'
const yearPublished = '2016'

// the book Americanah written by 
// Ngozi adichie was publised in year 2016

const description = 'the book' + bookTitle + 'written by' + author + 'was published in the year' + yearPublished;
console.log(description);



// template literals - allows us to format variables into strings
//  backticks  the Book ${bookTitle}

const description2 = `The book ${bookTitle} written by ${author} was publsied in the year ${yearPublished}`;
console.log(description2);



const name1 = 'Ade'
const name2 = 'olu'

// Ade  is a boy
const sentence = `${name1} is a boy`;
// His name is wale
const sentence2 = `${name2}`;
 
// Tinubu said and i quote 'let the poor breathe'
const quote = `Tinubu said and i quote"Let the poor breathe"`;
console.log(quote);
















// numbers -1234...
// Boolean -true and false