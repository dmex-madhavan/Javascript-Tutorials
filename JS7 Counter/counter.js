// Counter Program -- 

//The <div> tag defines a division or a section in an HTML document. 
//The <div> tag is used as a container for HTML elements - which is then styled with CSS
//The <div> tag is easily styled by using the class or id attribute.

//Use the :hover selector to change the style of the button when you move the mouse over it.

const decreasebtn = document.getElementById("decreaseBtn");
const resetbtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel")
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
