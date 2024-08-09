//Switches - an efficient way to replace else if statements

/*let day = "pizza";

if (day == 1)
{
    console.log("It is monday");
}
else if (day == 2)
{
    console.log("It is tuesday");
}
else if (day == 3)
{
    console.log("It is wednesday");
}
else if (day == 4)
{
    console.log("It is thursday");
}
else if (day == 5)
{
    console.log("It is friday");
}
else if (day == 6)
{
    console.log("It is saturday");
}
else if(day == 7)
{
    console.log("It is sunday")
}
else
{
    console.log(`${day} is not a day`);
}
*/

/*let day = "pizza";

switch(day){
    case 1:
        console.log("This is Monday");
        break;
    case 2:
    console.log("This is Tuesday");
    break;
    case 3:
        console.log("This is Wednesday");
        break;
    case 4:
        console.log("This is Thursday");
        break;
    case 5:
        console.log("This is Friday");
        break;
    case 6:
        console.log("This is Saturday");
        break;
    case 7:
        console.log("This is Sunday");
        break;
    default:
        console.log(`The ${day} is not a day`);
}
*/

let testScore = 51;

let letterGrade;

switch(true){
      case testScore >= 90:
      letterGrade = "A";
      break;

      case testScore >= 80:
        letterGrade = "B";
        break;

      case testScore >= 70:
        letterGrade = "C";
        break;

      case testScore >= 60:
        letterGrade = "D";
        break;
      default:
        letterGrade = "F";
}
        console.log(letterGrade);