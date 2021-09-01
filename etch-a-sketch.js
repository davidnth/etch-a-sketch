const container = document.querySelector(".container");
var divs = document.querySelectorAll(".box");
var size = 16;


//Returns a random color 
function randomRGB() {
    let number = Math.round(Math.random() * 255);
    var rgb = 'rgb(' + 
    `${Math.round(Math.random() * 255)}` +', ' + 
    `${Math.round(Math.random() * 255)}` + ', ' + 
    `${Math.round(Math.random() * 255)})`;
    return rgb;
}

/*Create a grid of size x size divs and give each div a
        mouseenter event listener and sets background color
        to black*/
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



rainbow = false;
function rainbow(){
    rainbow = true;
    if (rainbow = true){
        divs.forEach(div => div.addEventListener("mouseenter", function rainbowPen(){
        div.style.backgroundColor = randomRGB();
    }))}
    else{
            div.removeEventListener("mouseenter", rainbowPen);
    }
    
    //div.removeEventListener("mouseenter", rainbowbowPen);
}




function darken(){
    rainbow = false;
    divs.forEach(div => {
        var color = div.style.backgroundColor;
        var nums = color.slice(4, color.length - 1);
        var initValues = nums.split(", ");
        const R = Number(initValues[0]);
        const G = Number(initValues[1]);
        const B = Number(initValues[2]);
        let i = 0;
        
        
        div.addEventListener("mouseenter", () =>{
            
                i++;
                if (i < 11){
                    r = R - i*(R * .1);
                    g = G - i*(G * .1);
                    b = B - i*(B * .1);
                }
                else{
                    r = 0;
                    g = 0;
                    b = 0;
                }

            div.style.backgroundColor = 'rgb(' + r +', ' + g + ', ' + b + ')';
            console.log(div.style.backgroundColor);
            });
    });
}