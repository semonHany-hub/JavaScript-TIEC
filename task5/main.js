//Dom
document.write("<h2>learn simply</h2>")//add element directly into html page

element2=document.createElement("h4");//creates a javascript element
element2.textContent="222";//the only difference between textContent and innerHTML is that the tags inside innerHTML are applied on the text unlike the textContent that deals with it as a normal text.
element2.style.backgroundColor="red";
element2.style.color="blue";
element2.style.fontSize=50;
element2.style.height=100;
element2.style.width=100;
document.body.append(element2);//used to add any number of elements into body tag of html file 
//elements in Dom have attributes: textContent and style wich include all css properties written in camel case

element3=document.createElement("p");
element3.style.backgroundColor="blue";//the properties of CSS that compose of more than one word we use dash between them while in JS we use the camel-case on it.
element3.style.color="red";
element3.style.fontSize=50;
element3.textContent="313";
element3.style.height=90;
element3.style.width="100px";
document.body.appendChild(element3);//used to add only one element into body tag of html file 


