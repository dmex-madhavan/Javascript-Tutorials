//String Slicing - Creating a substring from a portion of another string

// string.slice(start, end)

/*const username = "Madhavan Duraisamy";

//let firstName = username.slice(0, 8);
//let lastName = username.slice(9, ); 

//let firstChar = username.slice(0, 1);
//let lastChar = username.slice(-1);

let firstName = username.slice(0, username.indexOf(" "));
let lastName = username.slice(username.indexOf(" ") + 1, );

//console.log(firstChar);
//console.log(lastChar);
//console.log(firstName);
//console.log(lastName);

console.log(firstName);
console.log(lastName);

*/

const email = "madhavan@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1 , );

console.log(username);
console.log(extension);


