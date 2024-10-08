// object - allows us provide descriptions to naming
// const person = ['ade', 'wale', 67, 'google', true];

// {key : value, key2 : value2}
// key and value pairs are called object properties
const person = {
    firstName: 'Ade',
    lastName: 'Wale',
    age: 64,
    isMarried: true,
    friends: ['john', 'wale'],
    workHours:{
        monday: '8 hours',
    },
};
console.log(person);

// how do we access properties inside of objects
//  dot notation - objName.propertyName
console.log(person.age);
console.log(person.friends);
console.log(person.friends[0]);

console.log(person.car); 
console.log(person.workHours.monday);

//  bracket notation - objName['propertyName']
console.log(person['age']);
console.log(person['friends'][1]);
console.log(person['workHours']['monday']);

// adding a new property to an object
person.car = 'benz';
person.hobbies = ['running', 'sleeping'];
console.log(person);

// removing a property from an object delete
delete person.isMarried;
console.log(person);

// object method - functions that the developer writes to work on the object

const book = {
    title: 'in the shadow',
    author:'john doe',
    yearPublished: 2000,
    genre: 'fiction',
    isBestSeller: 'false',
    rating: 3.5,
    summary: function () {
        // the book is title in the shadow and it is written by john doe and has a rating of 3.5
        console.log(`The Book is Titled ${this.title} and it is written by  ${this.author} and has a rating of ${this.rating}`);
    },
}

book.summary();
book.title;


// object destructuring-
// modern and faster way of picking properties in an object

// const user = {
//     username: 'user001',
//     fullName: 'peter pan',
//     passwword: "*******",
//     profilePic: "avater",
//     followers: ['wale', 'john', 'jane'],
//     following: ['Elon Musk', 'T-pain', 'ronaldo'],
//     dateOfAccount: 2020,
//     posts:{
//         title: 'js is fun',
//         description: 'i love js a lot'
//     }
// };

// user.profilePic;

// const {username, profilePic, dateOfAccount, passwword, followers} = user;

// const {posts: {title, description}} = user;
// console.log(title, description);

// OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
const user = {
    username: "user001",
    fullName: "Peter Pan",
    password: "",
    profilePic: "avatar",
    followers: ["Wale", "John", "Jane"],
    following: ["Elon Musk", "T pain", "Ronaldo"],
    dateOfAccount: 2020,
    posts: {
      title: "JS is Fun",
      desc: "I love JS a lot",
    },
  };
  
  user.profilePic;
  user.posts.title;
  user.fullName;
  
  const { username, profilePic, dateOfAccount, password, followers } = user;
  const {
    posts: { title, desc },
  } = user;
  console.log(title, desc);
  
  const myMainUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  const email = "mubarak@google.com";
  //aliase - renaming
  const {
    id,
    email: mainUserEmail,
    address: {
      street,
      geo: { lat: latitude, lng: longitude },
    },
    company: { name, catchPhrase, bs },
  } = myMainUser;


//   array destructuring 
const peoplesNames = ['susan', 'joy', 'mercy', 'ade']
const[ ,second ] = peoplesNames;
console.log(second);
