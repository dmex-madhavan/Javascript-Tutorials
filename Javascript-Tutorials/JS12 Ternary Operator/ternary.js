// Ternary Operator - shortcut to if & else statement that helps to assign a variable based on condition

// condition ? codeiftrue : codeiffalse;

let age = 21;
/*let message;

if(age >=18)
{
    message = "You are an adult";
}
if(age < 18)
{
    message = "You are a minor";
}
*/

//let message = age >= 18 ? "You are an adult" : "You are a minor";
//console.log(message);

/*let isStudent = false;
let message = isStudent ? "You are a student" : "You are not a student";
console.log(message);
*/

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10:0;
console.log(`Your total amount is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
