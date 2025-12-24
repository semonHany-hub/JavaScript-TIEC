const wrapper=document.getElementById("wrapper");
wrapper.classList.add("wrapper");
const container=document.createElement("div");
container.className="container";
let myTurn=true;
for(let i=1; i<=9; i++)
{
    const btn=document.createElement("button");
    btn.classList.add("button-option");
    btn.id="${i}";
    container.append(btn);
    btn.addEventListener("click",function(e) {/*btn is the e-currentTarget here*/
        if(myTurn && btn.textContent=="") btn.textContent="X";//btn is the e-target here
        else if(!myTurn && btn.textContent=="") btn.textContent="O";
        myTurn=!myTurn;

        if((container.getElementById("1").textContent=="X")&&(container.getElementById("2").textContent=="X")&&(container.getElementById("3").textContent=="X")
            ||(container.getElementById("4").textContent=="X")&&(container.getElementById("5").textContent=="X")&&(container.getElementById("6").textContent=="X")
            ||(container.getElementById("7").textContent=="X")&&(container.getElementById("8").textContent=="X")&&(container.getElementById("9").textContent=="X")
            ||(container.getElementById("1").textContent=="X")&&(container.getElementById("4").textContent=="X")&&(container.getElementById("7").textContent=="X")
            ||(container.getElementById("2").textContent=="X")&&(container.getElementById("5").textContent=="X")&&(container.getElementById("8").textContent=="X")
            ||(container.getElementById("3").textContent=="X")&&(container.getElementById("6").textContent=="X")&&(container.getElementById("9").textContent=="X")
            ||(container.getElementById("1").textContent=="X")&&(container.getElementById("5").textContent=="X")&&(container.getElementById("9").textContent=="X")
            ||(container.getElementById("3").textContent=="X")&&(container.getElementById("5").textContent=="X")&&(container.getElementById("7").textContent=="X"))
            console.log("The player of X is the winner");
            
        else if((container.getElementById("1").textContent=="O")&&(container.getElementById("2").textContent=="O")&&(container.getElementById("3").textContent=="O")
            ||(container.getElementById("4").textContent=="O")&&(container.getElementById("5").textContent=="O")&&(container.getElementById("6").textContent=="O")
            ||(container.getElementById("7").textContent=="O")&&(container.getElementById("8").textContent=="O")&&(container.getElementById("9").textContent=="O")
            ||(container.getElementById("1").textContent=="O")&&(container.getElementById("4").textContent=="O")&&(container.getElementById("7").textContent=="O")
            ||(container.getElementById("2").textContent=="O")&&(container.getElementById("5").textContent=="O")&&(container.getElementById("8").textContent=="O")
            ||(container.getElementById("3").textContent=="O")&&(container.getElementById("6").textContent=="O")&&(container.getElementById("9").textContent=="O")
            ||(container.getElementById("1").textContent=="O")&&(container.getElementById("5").textContent=="O")&&(container.getElementById("9").textContent=="O")
            ||(container.getElementById("3").textContent=="O")&&(container.getElementById("5").textContent=="O")&&(container.getElementById("7").textContent=="O")
            )
            console.log("The player of O is the winner");
        
        else console.log("Draw!");
    });

}

const restartBtn=document.createElement("button");
restartBtn.id="restart";
restartBtn.textContent="Restart";
wrapper.append(container);
wrapper.append(restartBtn);

restartBtn.addEventListener("click", function(e){
    for(let i=1; i<=9; i++)
    {
        container.querySelector("${i}").textContent="";
    }
    myTurn=true;
});
