// Cons - Variables that cannot be changed.

const pi = 3.14;
let radius;
let circumference;

//pi = 4.2542; The constant value of pi cannot be changed. 

//To find the circumference of the circle

//radius = window.prompt(" Enter the radius of the circle");
//radius = Number(radius);

//circumference = 2 * pi * radius;

//console.log(circumference);

document.getElementById("mysubmit").onclick= function(){
      radius = document.getElementById("mytext").value;
      radius = Number(radius);
      circumference = 2 * pi * radius;
      document.getElementById("myH3").textContent = circumference + "cm";

}