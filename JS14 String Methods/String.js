// String methods - Used to manipulate and work with strings 

// charAt - 

let username = "Madhavan";

console.log(username.charAt(0));
console.log(username.indexOf("a"));
console.log(username.lastIndexOf("a"));
console.log(username.length);
console.log(username.trim()); //trims the white spaces before and after the word
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(3));

let result = username.startsWith(" ");  //(endswith) command looks from end side....

if(result){
    console.log("Your username should not start with empty space");
}
else{
    console.log(username);

}

result = username.includes(" ");  

if(result){
    console.log("Your username should not include empty space");
}
else{
    console.log(username);
    
}

let phoneNumber = "770-80-15-332";

phoneNumber = phoneNumber.replaceAll("-","");

console.log(phoneNumber);

/*phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);*/
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);

