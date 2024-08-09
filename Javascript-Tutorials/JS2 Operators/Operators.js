/* Arithmetic operators - Operands (value, variables, etc..)
                        - Operators ( + - * / )
             
                        ex : x + 5 = 11;
*/

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
let extrastudents = students % 3;

//augmented assignment operators

//students += 10;
//students -= 10;
//students *= 10;
//students /= 10;
//students **=2;
//students %= 4;

//increment and decrement operators

//students++;
students--;

/*operator precedence 

   1) Paranthesis ()
   2) Exponents  (5 ** 2)
   3) Multiplication & Division (* /)
   4) Addition & Subraction (+ -)
 */


let result = (5 + 2 - 1) * 2 ;

console.log(students);
console.log(extrastudents);
console.log(result);