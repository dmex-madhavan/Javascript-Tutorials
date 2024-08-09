//Method Chaining - calling one method after another in one continous line of code.

//-----No Method Chaining-------//

let username = window.prompt("Enter you username");

username = username.trim();
let firstChar = username. charAt(0);
firstChar = firstChar.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
username = firstChar + extraChar;

console.log(username);


//--------Method Chaining------//

username = username.trim().charAt(0).toUpperCase()+username.slice(1).toLowerCase();

console.log(username);