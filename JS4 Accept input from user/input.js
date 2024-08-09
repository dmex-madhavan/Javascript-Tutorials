/* How to accept user from input

Easy way - Window prompt
Professional way - HTML textbox

*/

/*
let username;

username = window.prompt(" What's your username? ");

console.log(username);

*/

document.getElementById("mysubmit").onclick = function() {
     username = document.getElementById("mytext").value;
     document.getElementById("myH1").textContent = `Hello ${username}`;
}
