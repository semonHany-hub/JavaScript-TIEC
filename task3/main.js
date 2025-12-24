let operation=prompt("please, enter the operation to calculate");//تستخدم فى إظهار حقل إدخال لليوزر بينما الفانكشن / window.prompt()تستخدم لإظهار حقل إدخال بنافذة
toArr=operation.split("");/*used to convert a string into array as it splits each character in this value, while split(" ") splits each word*/

let i=0;
while(i<toArr.length)//toArr.length()(with brackets) is an error syntax
{
    if(toArr[i]==" ")
       toArr.splice(i,1), i--;/*this function is used to omit one element or more from an array
       (the index of the first element to omit, the numb
       er of elements to omit)*/
    i++;
}
debugger; //used to be highlighted while debugging in sources
i=0;
while(i<toArr.length-1)
    {
        //if(toArr[i]!="+" && toArr[i]!="-" && toArr[i]!="/" && toArr[i]!="*" && toArr[i+1]!="+" && toArr[i+1]!="-" && toArr[i+1]!="/" && toArr[i+1]!="*")
        if(!"+-/*".includes(toArr[i])&&!"+-/*".includes(toArr[i+1]))
        {
            toArr[i]=toArr[i]+toArr[i+1];//concatenation
            toArr.splice(i+1,1);
            i--;
        }
        i++;
    }
i=1;
while(i<toArr.length-1)
{
    if(toArr[i]=="*")
    {
        toArr[i-1]=Number(toArr[i-1])*Number(toArr[i+1]);/*we can put plus or minus sign before the character or string to transform it into number.
        or use the function parseInt() or parseFloat()*/
        toArr[i+1]=0;
    }
    else if(toArr[i]=="/")

        {
            toArr[i-1]=Number(toArr[i-1])/Number(toArr[i+1]);
            toArr[i+1]=0;
        }
    else if(toArr[i]=="%")
        {
            toArr[i-1]=Number(toArr[i-1])%Number(toArr[i+1]);
            toArr[i+1]=0;
        }
    else if(toArr[i]=="-")
    {
        toArr[i+1]= -1*Number(toArr[i+1]);
    }
    i++;
}
i=0, result=0;

while(i<=toArr.length-1)
{
    result+=Number(toArr[i]);
    i+=2;
}
console.log(result);
/*Number also used as object with properties(MAX_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER) and methods(isInteger, isSafeInteger, isNaN) */
/*Math is also object(instructor) with properties(E(عدد أويلر), PI(ثابت باى)), methods(min(), max(), round(), floor(), ceil(), abs(), sqrt(), pow( , ), random()(return a random number from 0 to 1(exclusive))*/