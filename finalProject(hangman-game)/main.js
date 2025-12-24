let allelement=document.getElementById("allelement");

let items=[
    {
        word:"Aladdin",
        hint:"He has a magic lamp called a genie that grants his wishes Nemo"
    },
    {
        word:"SnowWhite",
        hint:"She has a bad stepmother who gives her a poisoned apple"
    },
    {
        word:"Elsa",
        hint:"she was Born with the power of ice and can’t control her power unless come Her sister and helps her"
    },
    {
        word:"Mermaid",
        hint:"A mermaid who wants to live her life with a human"
    },
    {
        word:"Tarzan",
        hint:"He is an orphan who spends his childhood in the forest"
    }
]

let wrongGuessesCount = 0;
let totalGuesses = 6;
const item=items[randomIndex = Math.floor(Math.random() * items.length)];
let form= document.createElement("form");
for (let i = 0; i < item.word.length; i++) {
    let input = document.createElement("input");
    input.type = "text";
    input.className = item.word[i];
    form.appendChild(input);
    document.getElementsByTagName("div")[0].appendChild(form);

    input.addEventListener("keypress", function (e) {
        if (e.key !== input.className) {
          wrongGuessesCount++;

          if(wrongGuessesCount==1)
            document.getElementsByTagName("img")[0].src="second src.jpeg";
           if(wrongGuessesCount==2)
            document.getElementsByTagName("img")[0].src="third src.jpeg";
        if(wrongGuessesCount==3)
            document.getElementsByTagName("img")[0].src="forth src.jpeg";
           if(wrongGuessesCount==4)
            document.getElementsByTagName("img")[0].src="fifth src.jpeg";
         if(wrongGuessesCount==5)
            document.getElementsByTagName("img")[0].src="sixth src.jpeg";
          if(wrongGuessesCount==6)
            document.getElementsByTagName("img")[0].src="seventh src.jpeg";

          document.getElementById("wrongGuessesCount").textContent = "Wrong guesses: " + wrongGuessesCount + "/6";
        }

        if (wrongGuessesCount == totalGuesses) {
          alert("Game Over! You lost. The correct word was: " + item.word);
        }
      })


      
    }
const letter = "abcdefghijklmnopqrstuvwxyz";
const arrayletter = Array.from(letter);
let lettercontainer = document.getElementById("letter");

arrayletter.forEach(letter => {
    let span = document.createElement("span");
    let theletter = document.createTextNode(letter);
    console.log(theletter);
    
    span.className = "span";
    span.appendChild(theletter); 
    lettercontainer.appendChild(span); 

    span.addEventListener("click", function(e) {
        e.stopPropagation();
        let charFound = false;
        for (let i = 0; i < item.word.length; i++) {
            if(e.currentTarget.textContent == item.word[i]) {
                charFound = true;
            }

            if (wrongGuessesCount == totalGuesses) {
                alert("Game Over! You lost. The correct word was: " + item.word);
            }
        }
        if (!charFound) {
            wrongGuessesCount++;
            document.getElementById("wrongGuessesCount").textContent = "Wrong guesses: " + wrongGuessesCount + "/6";
        }
    });
});

  let hint = document.createElement("p");
  hint.textContent = "hint: " + item.hint;
  document.getElementsByTagName("div")[0].appendChild(hint);

  
