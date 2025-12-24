function arrayReduce(elements, reduceFn)
{
  let totalsum=0, partialsum=0;
  for(let i=1; i<elements.length; i++)
  {
    totalsum+=reduceFn(elements[i], elements[i-1]);
  }
  for(let i=1; i<elements.length-1; i++)
    {
      partialsum+=elements[i];
    }
  return totalsum-partialsum;
}

const elements=[2,7,3,4,-1];
console.log(arrayReduce(elements, function Reduce(item, previous)
{
    return previous + item;
}))