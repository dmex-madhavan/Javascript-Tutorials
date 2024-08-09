// Is else statements -- If some code is true the code will execute, otherwise do something else

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

age = myText.value;
age = Number(age);

if( age >= 100 ){
     //console.log("You are too old enough to enter");
     resultElement.textContent = "You are too old enough to enter";
}

else if (age >= 18){
    //console.log("You are old enough to enter this site");
    resultElement.textContent = "You are old enough to enter this site";
}
else if (age == 0){
    //console.log("You cant enter - you were just born");
    resultElement.textContent = "You cant enter - you were just born";
}

else if (age<0){
    //console.log("Your age cannot be below 0");
    resultElement.textContent = "Your age cannot be below 0";
}

else{
    //console.log("You must be 18+ to enter this website");
    resultElement.textContent = "You must be 18+ to enter this website";
}
}

/*let isStudent = true;

if(isStudent)
{
    console.log("You are a student");
}
else{
    console.log("You are not a student");
}
*/

/*let age = 21;
let haslicense = false;

if(age >= 18){
    console.log("You are old enough to have a license");

   if(haslicense)
   {
    console.log("You have your license");
   }
   else{
    console.log("You dont have your license");
   }
}
else{
    console.log("You are not old enough to have a license");
}

*/
