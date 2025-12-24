// //first task
// let arr=[4,3,6,4,2,6];
// arr.sort();
// let sum=0;
// arr.forEach(function(num)
// {
//     if(arr[arr.indexOf(num)]!=arr[arr.indexOf(num)+1]) sum+=num;
// })

// console.log(sum);
// /***************************************************************************/
//second task
// let word=prompt("enter a word")
// console.log(word.length);
// if(word.length%2==1) console.log(word.charAt(word.length/2));
// else console.log(word.split("")[word.length/2-1]+word.split("")[word.length/2]);
// /******************************************************************************/
// //third task
// let array=[2,4,2,6,7,2,6,2,2];
// let counter=0, mostfrequent=0;
// array.sort();
// array.forEach(function(item)
// {
//   if(array[array.indexOf(item)]==array[array.indexOf(item)+1]) counter++;
//   else if(counter>mostfrequent) mostfrequent=counter;
// })
// console.log(mostfrequent);
// /*****************************************************************************/
//forth task
// const country_names={
//     Egypt:450,
//     Iran:300,
//     Japan:500,
//     Korea:270,
//     Turkey:400
// }
// let discount = 40;//percent
// let form=document.createElement("form");
// let input=document.createElement("input");
// input.type="text";
// input.name="country";
// input.placeholder="your country with first letter capital";
// let submit=document.createElement("input");
// submit.type="submit";
// form.appendChild(input);
// form.appendChild(submit);
// document.body.appendChild(form);
// form.addEventListener("submit", function(e){
//    e.preventDefault();
//    let country=input.value;
//    let check=0;
// for(let item in country_names)
// {
//     if(item==country)
//     {document.write("you have "+discount+"% discount, then the price will be "+ country_names[item]*0.4+ ' in your currency');  check=1;}
// }
//  if(check==0) document.write("you have not any discount"); 
// })
// /******************************************************************************/
//fifth task
let my_friends=[];//تحديد اقصى طول للارراى  
let maxlength=4;
let fo=document.createElement("form");
let inpu=document.createElement("input");
inpu.placeholder="your friend's name";
inpu.type="text";
let sub=document.createElement("input");
sub.type="submit";
fo.append(inpu);
fo.append(sub);
document.body.appendChild(fo);
for(let i=0; i<4; i++)
{
    fo.addEventListener("submit",function(e){
        e.preventDefault();
        let friend=inpu.value;
        let i=0, toarr=friend.split("");
        while(toarr[i]=="")
        {
          toarr.splice(i,1);
          i++;
        }
        let j=toarr.length-1;
        while(toarr[j]=="")
        {
        toarr.splice(i,1);
        j--;
        }
        if(friend.toUpperCase()==friend) console.log("invalid name!");
        else if(friend.charAt(0)==friend.charAt(0).toUpperCase())
        {my_friends.push(friend); let spaces=4-i-1;   console.log(my_friends);   console.log("the name "+ friend +" has been added and there are "+spaces+" spaces left");  friend='';}
        else
        { let validname=friend.charAt(0).toUpperCase()+friend.slice(1);   my_friends.push(validname);   let spaces=4-i-1;     console.log(my_friends);
            console.log("the name "+ friend +" has been added after converting the first letter to uppercase and there are "+ spaces +" spaces left")
            friend="";
        }
    })   
}
// /*******************************************************************************/
// //sixth task
// let numlist=[6,5,9,2,4,10,15,3];
// function divisibility(numlist)
// {
//  for(let i=0; i<numlist.length; i++)
//  {
//     if(numlist[i]%5==0) console.log(numlist[i]);
//  }
//  console.log("the loop has ended successfully")
// }

// function print(numlist)
// {
//     for(let i=0; i<numlist.length; i++)
//     {
//         console.log(i+1+" "+numlist[i]);
//     }
// }

// function sort(numlist)
// {
//     numlist.sort();
//     let i=numlist.length-2;
//     console.log(numlist[numlist.length-1])
//     while(i>=0)
//     {
//         console.log(" ");
//         console.log(numlist[i]);
//         i--;
//     }
// }

// divisibility(numlist);
// print(numlist);
// sort(numlist);
// /*********************************************************************************/
// //seventh task
// let n=document.querySelector("div").childNodes[document.querySelector("div").childNodes.length-1];
// console.log(n);
// /**********************************************************************************/
// //eighth task
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
//   for(let item in myFavGames)
//   {
//     console.log("The Game Name Is "+item);
//     console.log("The Publisher Is "+myFavGames[item].publisher);
//     console.log("the price is "+myFavGames[item].price);
//     if(item!="Trinity Universe")
//     {
//         console.log("- Game Has Releases")
//         console.log("First => "+myFavGames[item].bestThree.one);
//         console.log("Second => "+myFavGames[item].bestThree.two);
//         console.log("Third => "+myFavGames[item].bestThree.three);
//     }
//     console.log("##########################");
//   }
//   /********************************************************************************/
//   //ninth task
//   string=prompt("enter a word to check it's letters'positions in alphabet")
//   let toarray=string.split("");
//   for(let i=0; i<toarray.length; i++)
//   {
//     console.log("the position of "+toarray[i]+" is "+ (Math.abs(97-string.charCodeAt(i))+1));
//   }
//   /********************************************************************************/
//   //tenth task
//   floorsarr=[5,7,2,4,9,1,3];
//   distance=0;
//   for(let i=0; i<floorsarr.length-1; i++)
//   {
//     distance+=Math.abs(floorsarr[i]-floorsarr[i+1]);
//   }
//   console.log("the total distance between the floors is "+distance);