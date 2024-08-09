//Checked - property that determines the checked state of a HTML checkbox or a radio button element

const check = document.getElementById("check");
const AmazonBtn = document.getElementById("AmazonBtn");
const NetflixBtn = document.getElementById("NetflixBtn");
const HotstarBtn = document.getElementById("HotstarBtn");
const mybutton = document.getElementById("mybutton");
const result = document.getElementById("result");
const subresult = document.getElementById("subresult");

mybutton.onclick = function(){

    if(check.checked){
        result.textContent = "You are subscribed";
    }
    else{
        result.textContent = "You are not subscribed";
    }
    if(AmazonBtn.checked){
        subresult.textContent = "You are using Amazon Prime";
    }
    else if(NetflixBtn.checked){
        subresult.textContent = "You are using Netflix";
    }
    else if(HotstarBtn.checked){
        subresult.textContent = "You are using Hotstar";
    }
    else{
        subresult.textContent = "You must select any one";
    }
}