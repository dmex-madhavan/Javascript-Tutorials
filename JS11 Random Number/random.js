//Random Number Generator

//let randomNum = Math.random();

//let randomNum = Math.floor(Math.random() * 6) + 1; //prints random number from 1 to 6

/*const max = 100;
const min = 50;

randomNum = Math.floor(Math.random() * (max - min)) +min;

console.log(randomNum);

*/

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 10;
const max = 15;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min)) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}