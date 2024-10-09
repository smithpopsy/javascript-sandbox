// local storage 

// set something into local storage
// localStorage.setItem('token', 'hello');

// gettinfg something from  the local storage
// localStorage.getItem('token');

// remove values in the local storage
// localStorage.removeItem('token');

// clear our local storage
// localStorage.clear()

// local storage can only take in strings 
// what if i want to put in other datatypes, we use "JSON.stringify"
// JSON- javascript object notation

localStorage.setItem("user", JSON.stringify(user));
// 
// JSON.parse
localStorage.getItem("user");
JSON.parse(localStorage.getItem("user"));


