let board=document.getElementById("board");
let container_div=document.createDocumentFragment();

const blackPieces = [
	["castle", "knight", "bishop", "queen", "king", "bishop", "knight", "castle"],
	["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"]
];

const whitePieces = [blackPieces[1], blackPieces[0]];

for(let j=0; j<8; j++)
{
    for(let i=0; i<8; i++)
        {
            div=document.createElement("div");
            div.classList.add("square");
            div.id=(i+8*j).toString();
            container_div.append(div);
            if((i+j)%2==0) div.classList.add("dark");
            else div.classList.add("light");
            
            if(j==0||j==1)
                div.classList.add(blackPieces[j][i]);
            else if(j==6||j==7)
                div.classList.add(whitePieces[j][i]);
            else
                div.classList.add("empty");
        }
}
//اللوب الخارجى يمثل الصفوف بينما الداخلى يمثل الأعمدة

    // div_elements=array.from(container_div.getElementsByTagName("div"));

// let j=0;
// for(let i=0; i<64; i++)
//     {
//         div=document.createElement("div");
//         div.classList.add("square");
//         div.id=i.toString();
//         container_div.append(div);
//         if(i%8==0)j++;
//         if((i+j)%2==0)  div.classList.add("light");
//         else  div.classList.add("dark");
//     }


    // for(let j=0; j<8; j++)
    // {
    //     for(let i=0; i<8; i++)
    //     {
    //         if((i+j)%2==0) container_div.getElementById(j+i*8).classList.add("dark");
    //         else container_div.getElementById(j+i*8).classList.add("light");
    //     }
    // }

    container_div.getElementById("0").classList.add("black-castle"); 
    container_div.getElementById("1").classList.add("black-knight");
    container_div.getElementById("2").classList.add("black-bishop");
    container_div.getElementById("3").classList.add("black-queen");
    container_div.getElementById("4").classList.add("black-king");
    container_div.getElementById("5").classList.add("black-bishop");
    container_div.getElementById("6").classList.add("black-knight");
    container_div.getElementById("7").classList.add("black-castle");

for(let i=8; i<16; i++)
	container_div.getElementById(i.toString()).classList.add("black-pawn");

for(let i=16; i<48; i++)
    container_div.getElementById(i.toString()).classList.add("empty");

for(let i=48; i<56; i++)
	container_div.getElementById(i.toString()).classList.add("white-pawn");
  
container_div.getElementById("56").classList.add("white-castle"); 
container_div.getElementById("57").classList.add("white-knight");
container_div.getElementById("58").classList.add("white-bishop");
container_div.getElementById("59").classList.add("white-queen");
container_div.getElementById("60").classList.add("white-king");
container_div.getElementById("61").classList.add("white-bishop");
container_div.getElementById("63").classList.add("white-castle");


board.append(container_div);
//anonymous function is a function without name as it is a parameter of a built-in func