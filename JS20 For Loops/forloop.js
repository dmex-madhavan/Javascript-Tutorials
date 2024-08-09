// For Loops -- repeat some code a limited number of times

// Initilization // Condition // Updation

for (let i= 0; i <=10; i++){ //i+=2 // i-- // i-=2 (to decrement numbers)
    console.log(i);
}

console.log("Happy New Year");

for(let j=1; j<=10; j++)
{
    if(j==8)
    {
        continue; //leaves 8 and prints to the end
    }
    else{
        console.log(j);
    }
}

for(let k=1; k<=10; k++)
    {
        if(k==8)
        {
            break; //stops the loop after 8
        }
        else{
            console.log(k);
        }
    }