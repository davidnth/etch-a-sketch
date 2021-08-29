const container = document.querySelector(".container");
var divs = document.querySelectorAll(".box");
var size = 16;


//Returns a random color 
function randomRGB() {
    let number = Math.round(Math.random() * 255);
    var rgb = 'rgba(' + 
    `${Math.round(Math.random() * 255)}` +', ' + 
    `${Math.round(Math.random() * 255)}` + ', ' + 
    `${Math.round(Math.random() * 255)})`;
    return rgb;
}

/*Create a grid of size x size divs and give each div a
        mouseenter event listener*/
function squares(size){
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
        const box = document.createElement("div");
        box.className ="box";
        container.appendChild(box);
        }
     }
    container.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    divs = document.querySelectorAll(".box");
    divs.forEach(div => div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    }));  
}

//Clear and resize the grid
function resetGrid() {
    divs.forEach(div => div.style.backgroundColor="transparent");
    do{
    size = prompt("Please enter a grid size between 1-100");
    }
    while (size < 1 || size > 100);
    squares(size);
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", resetGrid);
const rainbowbutton = document.querySelector("#rainbow")
rainbowbutton.addEventListener("click", rainbow);
const darkenbutton = document.querySelector("#darken");
darkenbutton.addEventListener("click", darken);



squares(size);



function rainbow(){
    divs.forEach(div => div.addEventListener("mouseenter", () => {

        var randomColor = randomRGB();
        div.style.backgroundColor = randomColor;
       
        //console.log(div.style.backgroundColor);
    }))
}

function darken(){
    divs.forEach(div => div.addEventListener("mouseenter", () =>{
        console.log(div.style.backgroundColor);
    } ))
}