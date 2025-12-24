
let number=prompt("please, enter a number of three digits");
 num=number.split("");
 console.log("the armstrong of " + number + " is " + Number(num[0])**3+Number(num[1])**3+Number(num[2])**3);
//the sign (**) means أس


let text="javaScript";
text.substring(0,4);//java


let string =prompt("please, enter a string to capitalize it's first letter");
str=string.split("");
s=str[0].toUpperCase();
st=string.slice(1,string.length);

console.log(s+st);


let palindrome=prompt("please, enter a string to chek if it's apalindrome or not");
let palin=palindrome.split("");
let reversed=palin.reverse();
if(reversed.join("")==palindrome){console.log("yes");}
else{console.log("no");}//palindrome


let original=prompt("please, enter a sentence to convert it into title case");
let array=original.split(" ");
let result=array.map(word => word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase());
console.log(result.join(" "));//title case


let orig=prompt("please, enter a sentence to convert it into camel case");
let a=orig.split(" ");
let res=a.map(x => x.charAt(0).toUpperCase() + x.slice(1,screenX.length).toLowerCase());
console.log(res.join(""));//camel case
//the error NaN means(not a number)