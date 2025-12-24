
function len(arr)
{
 return arr.length;
 console.log(arr.length) //لن تعمل حيث انه بمجرد استخدام ريترن تتوقف الفانكشن
} 

function extract(str)
{
    return str.slice(0,4);
}
function division(arr)
{
    array=[];
  for(let i=0;i<arr.length;i++)
  {
    array[i]=arr[0]/arr[i];
  }
  return array;
}

function average(arr)
{
    let sum=0;
    for(let element of arr)
    {
        sum+=element;
    }
    return sum/len(arr);
}

let arr=[5, 7, 2, 9, 1];
console.log(extract(arr));
console.log(division(arr));
console.log(average(arr));

function sum(arr)
{
    let sum=0;
    for(let element of arr)
    {
        sum+=element;
    }
    return sum;
}

function totalSum(totalEarning)
{
    let summation=0;
    for(let subarray of totalEarning)
    {
        summation+= sum(subarray)
    }
    return summation;
}

function totalAverage(totalEarning)
{
    let avg=0;
    for(let subarray of totalEarning)
    {
        avg+=average(subarray)
    }
    return avg;
}
const totalEarning=[[1,2,3,4,5], [15,10,12,27], [101,-50,70,10,3091,77]]
console.log(totalAverage(totalEarning));
console.log(totalSum(totalEarning));

function front_back(str)
{
  return str[0]+str+str[0];
}
let string="semon";
console.log(front_back(string));


function eight(x, y)
{
    if(x==8||y==8||x+y==8||x-y==8)
        return true;
    else
        return false;
}
let x=prompt("enter a number");
let y=prompt("enter another number");
console.log(eight(x, y));

/*the functions String(para) and num.toString(), var.toString() or (num).toString() are used to convert number into string.
string.repeat(times of repetition),/ string.length(it's a property not a func),/ string.indexOf(char)(search from right to left),
string.lastIndexOf(char)(search from left to right),/ string.charAt(index)=string[index],/ string.slice(starting index, ending index(not inclusive)),
string.subString()(typically, like slice() the only difference is that slice() accept negative values as parameters (from right to left)),
subStr(starting index, the length from the index mentioned),/ string.includes(char)(return true or false), string.trim()(remove spaces from the start and end of the string),
string.split()(by default will make the whole string as a one element in an array), string.split(" ", the times of spliting) */
//isFinite():used to return true if the parameter is number and false otherwise,disrecardly the double(or single) quotes.
//isNaN():used to return true if the parameter is not a number and false otherwise,disrecardly the double(or single) quotes.
//the property string.length it's value is read only and can't be set.
//string.push()==string.concat():used to add character to the end of this string.

/*javascript characterized by hoisting which means automatically declare variables-by-var or declaration functions(with it's curly brackets content) 
so when we call the var before the initialism(in the same scope) the value will be undefined but not error, unlike let variables and expression functions*/
//expression functions (let func_name= function(){}).    //self-invoked functions has the form:(function(){})()(doesn't need a name or parameters)
/*functions are the only local block-of-code except of the case of hoisting which make the variables inside the other blocks global.*/
/*the parameters of a function called arguments while invoking. we can give the parameters default value used in case the arguments havn't value*/
/*when there are many arguments we can convert them into array as a parameter(...array-name)*/
/*functions can be used as constructors (like Number(), String(), Array(), Date(), etc.) with new keyword*/
/*functions can be used as higher-order functions (like map(), reduce(), filter(), etc.)*/
//arrow function: () =>(the arrow is instead of function word) number(returned value) (we can replace () with _ in case there aren't any parameters)