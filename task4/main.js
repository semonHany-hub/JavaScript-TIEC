function reverse_number(num)
{
  let reversed=[];
  arrnum=num.toString().split("");
  for(let i=0; i<arrnum.length; i++)
  {
    reversed=arrnum[i]+reversed;
  }
  return parseInt(reversed.toString(""));
}

console.log(reverse_number(32243));//output: 34223

/****************************************************************************/

function longestWord(str)
{
    arrOfWords=str.split(" ");
    let theLongest, len=0;
    for(let word of arrOfWords)
    {
      if(word.length>len){len=word.length, theLongest=word;}
    }
    return theLongest;
}

let sentence=prompt("please, enter a sentence to check the longest word of it")
console.log(longestWord(sentence));

/*****************************************************************************/

function vowels(str)
{
    let counter=0;
  for(let element of str)
  {
    if("aeiouAEIOU".includes(element)) counter++;
  }
  console.log(counter);
}

let string=prompt("please, enter a string to count the vowels in it");
vowels(string);