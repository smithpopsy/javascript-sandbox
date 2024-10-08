// rest and spread operator...
// rest operator
const countries = ['cuba', 'algeria', 'mexico', 'usa'];
const [one, ...others] = countries;

console.log(one);
console.log(others);

const country = {
    name: 'Nigeria',
    yearOfIndependence: 1960,
    officialLanguage: 'English',
    isIsland: false,
}; 
const {name, isIsland, ...remaining} = country;
console.log(remaining);

// spread operator
const africanCountries = ['mali', 'togo', 'kenya', 'uganda'];
const asianCountries = ['china', 'japan', 'bangladesh', 'vietman'];

const allCountries = [...africanCountries, 'congo', ...asianCountries, 'austria'];
 
console.log(allCountries);


// optional chaining
const user = {
    name: 'john doe',
    age: 45,
    gender: 'male',
    previouseJobs: {
        one: 'junmia',
        two:"paystack",
        three:'Meta',
    },
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previouseJobs?.three);

// if(user.profilePic) {

// }







// nullish coalescene
// leftExpression (nul || undefined) ?? defaultValue
const username = null;

console.log(username ?? 'unknown user');
