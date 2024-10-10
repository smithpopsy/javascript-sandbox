// Asynchronus
// synchronus / blocking

const url = 'https://jsonplaceholder.typicode.com/users';

// async- operations that do take time 

// promises - fulfilled, rejected, pending 
// .then method
fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) =>{
    console.log(error); 
});

// async / await

const getUsers = async () => {
    try {
        const response = await fetch (url);
        const data = await response.json();
    } catch (error) {
        console.log(error);     
    }
};

getUsers();


// request methods 
// get - retrieve data
//  post - creating a data 
// patch - updating a data point
// delete - deleting data
//  put -  updating (total overhaul)