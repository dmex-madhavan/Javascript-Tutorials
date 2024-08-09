const minNum = 1;
const maxNum = 100;
const username = "Madhavan";
const password = 2412;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let running = true;
let attempts = 0;
let guess;

while(running){
    guess = window.prompt(`Enter a value between ${minNum} to ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Enter a valid number");
    }
    else if( guess < minNum || guess > maxNum)
    {
        window.alert("Enter a valid number between 1 and 100");
    }
    else
    {
        attempts++;
        if(guess < answer)
        {
            window.alert("Too low - Please try again");
        }
        else if(guess > answer)
        {
            window.alert("Too high - Please try again");
        }
        else
        {
            window.alert(`Congratulations - Your answer is ${answer}!!`); 
            window.alert(`You solved this in ${attempts} attempts`);
            running = false;
        }
    }
}
    
/*username = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if (username && password)
        {
            window.alert(" Hello my friend ");
        }
        else 
        {
            window.alert("Wrong credentials - Try again later");
            running = false;
        }

        */