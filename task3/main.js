//   let counter=0;
//   while(counter<=15)
//   {
//       if(counter%2==0) console.log(counter+" is even");
//       else console.log(counter+" is odd");
//             counter++;
//   }


//   let biggest=0, array=[5,-1,2,1,14,2,5], index=0; 
//   while(index<array.length)  
//   {
//      if(array[index]>biggest) biggest=array[index];
//      index=index+1;
//   }
//   console.log("the biggest element is " + biggest);


 let content="My name is ali, MY favorite hobby is playing football, my favorite dish is Mahashi";
 let splited=content.split(" ");
 let mapped=splited.map(d => d.toLowerCase());
 let object={};

 for(let i=0;i<mapped.length;i++)
 {
     if(object[mapped[i]]>=1) object[mapped[i]]++;
     else object[mapped[i]]=1;
 }
 console.log(object);

 //the functions array.push(elem's value)used to add a new element to the end of the array, while array.pop()remove the last element.
 //array.unshift(elem's value) used to add a new element to the start of the array, while array.shift() remove the first element.
 //array.indexOf(elem's value, the index we start the search from) used to find the index of the first occurrence of a given element in the array.
 //array.lastIndexOf(elem's value) used to find the index of the last occurrence of a given element in the array.
 //array.slice(start_index, end_index) used to create a new array containing a shallow copy of a portion of an array.
 //array.splice(start_index, delete_count(we put 0 if we want to add only but not to remove), elem1, elem2, ...(the elements that will be added in the mentioned index)) used to add/remove elements from an array in place.
 //array.sort() used to sort the elements of an array(ascending or alphabetical order)in place and return the array.
 //array.reverse() used to reverse the order of the elements of an array in place and return the array.
 //array.concat() used to concat the elements or different arrays in one array, while concatenation by plus sign make them as a one string.
 //array.join() used to join all elements of an array into a string, separated by a specified separator(By default (comma)).
 //array.filter(callback(element, index, array){return condition;}) used to create a new array with all elements that pass the test implemented by the provided function.slightly similar to array.every() and array.some() except the return a boolean value.
 //array.map(callback(element, index, array)) used to create a new array with the results of calling a provided function on every element in the array.exactly like array.forEach() except it doesn't returns any value.
 //array.reduce(callback(accumulator, currentValue, currentIndex, array)) used to reduce the array to a single value by repeatedly calling the provided function(like the sum f all elements).
 //array.reduceRight(callback(accumulator, currentValue, currentIndex, array)) used to reduce the array to a single value in reverse order by repeatedly calling the provided function.
 //array.every(callback(element, index, array)) used to test whether all elements in the array pass the test implemented by the provided function.
 //array.find(function(){return condition;})(callback function called automatically by the container function and return the first element that match the condition).
 //in JS we can put a function into an array as an element.
 //the constructor(new set(array)) reurns object from array after removing the repeated values.it has the method add().
 //array.flat()used to flat the nested arrays into one array.

 //objects can have properties(variables) or methods(expression functions). we get them by dot_notation(object-name.property(or method)'s name) or bracket_notation (object-name['property(or method)'s name']).
 //we can create properties or methods of an empty object from outside.
 //we can create a new object by using the new keyword (new Object()).
 //(this)keyword refers to the container object.   //html elements are objects
 //we can put a function body into an array or object withhout the keyword(function).
 //the key of an object may be a variable and must has the form([key]).
 /*object.entries(objectName)used to convert an oject into array of arrays where each child array represent the key and it's value,
 while object.fromEntries(arrayName)used to convert the nested array into object.

 /*logical assignment operators(||=) used to assign the first value to the variable if true(not empty string) else it assign the second value,
 (&&=) used to assign the second value to the variable if the value of the variable is true else it returns false,
 (??=) if the first value is null or undefined it set the second one else it returns the first value*/
 //optional chaining(?.)used in nested objects to determine the first null or undefined value it find in the put expressin.

 /*the function fetch(URLofAPI)used to return a promise from the server".then(data => data.json())"returns the responce in json form(these functions may be used in curly brackets of the keyword(try)),
 .catch(callback function) used to return the error(may be used in curly brackets of the keyword(catch))*/
 //java script follow the syncronous programming but we can use the keyword (await) to make a function wait until the rest code executed.

 /*when we want to use a variable or function defined in another file we used the (export) and (import) keywords and link these files with HTML file using "type='module'",
 import default-exported,{function(or variable)-name as new-name}from exporting-file url. we can use the syntax (import * as all from url) where all is object of all variables and functions in the exporting file*/