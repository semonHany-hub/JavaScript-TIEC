const prods = {
	products: [
		{
			id: 1,
			title: "Essence Mascara Lash Princess",
			description:
				"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
			price: 9.99,
			tags: ["beauty", "mascara"],
			brand: "Essence",
			reviews: [
				{
					rating: 2,
					comment: "Very unhappy with my purchase!",
					date: "2024-05-23T08:56:21.618Z",
					reviewerName: "John Doe",
					reviewerEmail: "john.doe@x.dummyjson.com",
				},
				{
					rating: 2,
					comment: "Not as described!",
					date: "2024-05-23T08:56:21.618Z",
					reviewerName: "Nolan Gonzalez",
					reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
				},
				{
					rating: 5,
					comment: "Very satisfied!",
					date: "2024-05-23T08:56:21.618Z",
					reviewerName: "Scarlett Wright",
					reviewerEmail: "scarlett.wright@x.dummyjson.com",
				},
			],
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
			],
			thumbnail:
				"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
		},
		{
			id: 30,
			title: "Kiwi",
			description:
				"Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
			category: "groceries",
			price: 2.49,
			tags: ["fruits"],
			reviews: [
				{
					rating: 5,
					comment: "Very pleased!",
					date: "2024-05-23T08:56:21.620Z",
					reviewerName: "Nora Russell",
					reviewerEmail: "nora.russell@x.dummyjson.com",
				},
				{
					rating: 5,
					comment: "Very pleased!",
					date: "2024-05-23T08:56:21.620Z",
					reviewerName: "Dylan Wells",
					reviewerEmail: "dylan.wells@x.dummyjson.com",
				},
				{
					rating: 5,
					comment: "Great product!",
					date: "2024-05-23T08:56:21.620Z",
					reviewerName: "Noah Hernandez",
					reviewerEmail: "noah.hernandez@x.dummyjson.com",
				},
			],
			images: [
				"https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
			],
			thumbnail:
				"https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
		},
	],
	meta: [],
	numberOfProducts: 2,
};

const { products } = prods;//distruction
console.log(products);

const root = document.getElementById("root");//there is a function getElementsByName().

function initializeProductHeading(elem, card) {
	// Make a div to work as container for title & price
	const priceAndTitleContainer = document.createElement("div");
	priceAndTitleContainer.className =
		"flex-row justify-content-between align-items-center flex";

	// Then, Add product Title and product price
	const prodTitle = document.createElement("h5");
	prodTitle.className = "flex-grow";
	prodTitle.textContent = elem.title;
	priceAndTitleContainer.appendChild(prodTitle);//there also method removeChild("the child to remove") and replaceChild("the new one").
	const prodPrice = document.createElement("span");
	prodPrice.textContent = elem.price + " EGP";
	priceAndTitleContainer.appendChild(prodPrice);

	// Add Product title and price.
	card.appendChild(priceAndTitleContainer);
}

function initializeProductBody(elem, card) {
	// Then, create product Description element paragraph.
	const prodDescription = document.createElement("p");
	prodDescription.className = "flex-grow";
	prodDescription.textContent = elem.description;

	const btn = document.createElement("button");
	btn.className = "btn add-to-cart";
	btn.innerHTML = "<h1>Add To Cart</h1>";//يضع مضمون النص على هيئة عنصر من ال html

	// append product description to HTML
	card.appendChild(prodDescription);
	// Append add cart button to HTML
	card.appendChild(btn);
}

function initializeProductImage(elem, card) {
	// Then, make the image for single product\
	const prodImg = document.createElement("img");
	prodImg.src = elem.images[0];
	prodImg.style.width = "100%";
	// Add the image to card
	card.appendChild(prodImg);
}

function setup(products, root) {
	const container = document.createElement("div");
	container.classList.add("container", "flex", "flex-center", "w-100");

	products.forEach(function (elem) {
		// First create card that will hold all product info
		const card = document.createElement("div");
		card.className += " card";

		initializeProductImage(elem, card);

		initializeProductHeading(elem, card);

		initializeProductBody(elem, card);

		container.appendChild(card);
	});

	root.appendChild(container);
    document.body.appendChild(root);
}

setup(products, root);

const buttonsNodeList = document.querySelectorAll(".card button");//querySelector function select only the first element that match its parameter
const buttons = [...buttonsNodeList];
const cardsNodeList = document.getElementsByClassName("card");
const cards = Array.from(cardsNodeList);

cards.forEach(function (card) {;
	card.addEventListener("click", function (e) {
		console.log(e.currentTarget);
	});
});

buttons.forEach(function (button) {
	button.addEventListener("click", function (e) {
		e.stopPropagation();//used to stop bubbling (منع تنفيذ الحدث على العنصر الاب عندما يكون له نفس الحدث)
		addElementToCart(e.currentTarget.parentElement, Q);
	});
});

function addElementToCart(product, Q) {
	console.log(product);
 Q++;
 const unorderedlist=document.createElement("ul");
 const list=document.createElement("li");
 list.append(first(product, Q));
 list.append(second(product, Q));
 unorderedlist.append(list);
 document.body.getElementsByClassName("cart")[0].append(unorderedlist);
}

  function first (product, Q){
  const firstdiv=document.createElement("div");
  firstdiv.className="flex flex-row flex-between";
  const title=document.createElement("h5");
  title.textContent=product.children[1].children[0];
  firstdiv.appendChild(title);
  const price=document.createElement("span");
  price.textContent=product.children[1].children[1]+" EGP";
  const totalprice=document.createElement("span");
  totalprice.textContent=Q*parseFloat(price.textContent).toString()+" EGP";
  firstdiv.appendChild(price);
  firstdiv.appendChild(totalprice);
  return firstdiv;
}

function second(product, Q)
{
  const seconddiv=document.createElement("div");
  seconddiv.className="flex flex-row flex-between";
  const quantity=document.createElement("span");
  quantity.textContent ="Quantity";
  seconddiv.appendChild(quantity);
  const orderdamount=document.createElement("span");
  orderdamount.textContent = Q.toString();//=`${Q}`(backtic);
  seconddiv.appendChild(orderdamount);
  return seconddiv;
}

const cartbutton=document.getElementsByClassName("ca")[0].getElementsByTagName("button")[0];
cartbutton.addEventListener("click",function(e) {
document.write(document.getElementsByTagName("ul")[0]);
});
/*window object has objects(document, location, history, event, navigator and screen). document represent the entire HTML with its nodes(elements(tags), texts or comments)which DOM(document object model) deal with.
some of its methods(get(set)ParentElement(), getNextSiblingالاخ المجاور التالى(), getPrevSibling(), children(), childnodes()).
location represent the URL has the atttributes(href(the entire URL), hash(a part of URL represent the anchor that start with #) and search(return the query-string the represent the send data with attributes(name and value)values),
and has the methods replace(new URL), assign(new URL), reload().
navigator represent the prowser which BOM(browser object model) deal with.
event represent the user action on the page, has the attributes (type, target, currentTarget, preventDefault(), stopPropagation(), clientX(the distance according to the window), clientY, screenX, screenY, offsetX(the distance according to the parent element), offsetY, pageX(the distance according to the document(htmlPage)), pageY).
history represent array of URLs has the attribute length(the number of URLs), and has the methods( back(), forward(), go(steps)(when the staps is positive it work as the forward()method while it is negative work as back()method)).
screen has the attributes (height, width, availmidth, availheight لطول المتاح*/ 
//we can get Html elements by document.links(<a>) or document.image(s)(<img> its type is html-collection(semiArray)).
/*html-element.attributes:show all attributes of this element, html-element.hasAttributes, hasAttribute(" "): these returned value is boolean,
 html-element.setAttribute("attribute-name", "the new value"), html-element.removeAttribute("attribute-name").*/
 //the event onclick activates while pressing the left button of the mouse.
 //events related to the mouse: onmousedown, onmouseout, onmouseup, onmouseenter, onmouseleave and onmousemove.
 /*events related to the keyboard: onkeydown, onkeyup, onkeypress(can't be activated by identifying keies pressing(ctrl,Alt,...)) should be added to body tag.
 have the properties(e.keyCode(ASCCi code), e.key, e.code, e.type)*/
 //events related to the form: onsubmit, onreset, onchange, oninput(in each time the usertype into input element), on blur(the antonym of focus event).
 /*event.preventDefault(): stops the default action of an element like link or form submission.
 event.stopPropagation(): stops the bubbling of the event.
 event.target: represents the element that the event is triggered on.
 event.currentTarget: represents the element that the event listener is attached to.*/
 /*we can use inline eventas an attribute of the element's tag in HTML file,
 use event on the element in JS file or use addEventListener("eventName without "on"", callback function(){}") this function doesn't overRight*/
 //the function removeEventListener("eventName", the name of the callback function of the addEventListener).
//the global function getComputedStyle(the element) its returned value is object of all properties that was set on the element.
