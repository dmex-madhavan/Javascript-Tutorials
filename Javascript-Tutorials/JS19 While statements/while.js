// While Statements - repeat same code until WHILE condition is true

/*let username = " ";

if(username === " ")
{
    console.log("Your username should not be empty");
}
else{
    console.log(`Hello ${username}`);
}
*/

/*let username = " ";

while(username === " " || username === null){    //this makes like only u can enter by typing ur password
    username = window.prompt("Enter your username");
}

console.log(`Hello ${username}`);
*/

/*let username;

do
{   //this makes like only u can enter by typing ur password
    username = window.prompt("Enter your username");
} 

while(username === " " || username === null)

console.log(`Hello ${username}`);

*/

let loggedIn = false;
let username;
let password;

do {
      username = window.prompt("Enter your username");
      password = window.prompt("Enter your password");

      if(username === "myUsername" && password === "myPassword")
      {
        loggedIn = true;
        console.log("You are logged in");
      }
      else{
        console.log("Invalid credentials - Please try again");
      } 
     
}while(!loggedIn) //checks only at the end after executing do aleast once.
    
    //console.log("You are logged in");

