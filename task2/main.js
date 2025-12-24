let student_grade=66;
if(student_grade>=90)
    {console.log("Excellent");}
else if(student_grade>=75 && student_grade<90)
    {console.log("Very Good");}
else if(student_grade>=65 && student_grade<75)
    {console.log("Good");}
else if(student_grade>=50 && student_grade<65)
    {console.log("Fair");}
else if(student_grade>=40 && student_grade<50)
    {console.log("Weak");}
else {console.log("Very Weak");}


let operation=prompt("please, enter an arithmetic operation")
let oper=operation.split("");

//the function confirm()used to show a message to the user and recieve a boolean value from him

switch(oper[1])
{
    case "+": 
        console.log("the result is "+(Number(oper[0])+Number(oper[2])));
        break;
    case "-":
        console.log("the result is "+Number(oper[0])-Number(oper[2]));
        break;
    case "*":
        console.log("the result is "+Number(oper[0])*Number(oper[2]));
        break;
    case "/":
        if(oper[2]!=0)
            console.log(Number(oper[0])/Number(oper[2]));
        else
            console.log("it's impossible to divide by 0");
        break;
    default:
        console.log("this program doesn't support this operation");
}



let myInfo="(one, two, three)";
let partition=myInfo.slice(1,myInfo.length-1);//index of starting point, element-number of stoping point
console.log(partition)
info = partition.split(", ");
console.log(info);
