const container = document.querySelector(".container");
var divs = document.querySelectorAll(".box");
var size = 16;

function resetgrid() {
    divs.forEach(div => div.classList.remove("active"));
    do{
    size = prompt("Please enter a grid size between 1-100");
    }
    while (size < 1 || size > 100);
    squares(size);
}

//Clear and resize the grid;
const clear = document.querySelector("#clear");
clear.addEventListener("click", resetgrid);

//create a grid of size x size divs and give each div a
        //mouseenter event listener
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
        div.classList.add("active");
    })); 
    
}

squares(size);
