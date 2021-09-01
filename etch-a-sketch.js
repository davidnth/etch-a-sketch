const container = document.querySelector(".container");
var divs = document.querySelectorAll(".box");
var size = 16;
var penColor = "rgb(107, 107, 107)";

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
    color();
}

//Change backgroundColor of div to a specified color
let colorToggle;
function color(){
    rainbowToggle = false;
    darkenToggle = false;
    eraseToggle = false;
    colorToggle = true;
    colorbutton.addEventListener("input", () => {
        penColor = colorbutton.value;
    })
    colorToggle = true;
    divs.forEach(div => div.addEventListener("mouseenter", function pen(){
        if (colorToggle == true){
        div.style.backgroundColor = penColor;
        }
        else{
            div.removeEventListener("mouseenter", pen);
        }
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
const colorbutton = document.querySelector("#color");
colorbutton.addEventListener("click", color);
const erasebutton = document.querySelector("#erase");
erasebutton.addEventListener("click", erase);

//Change backgroundColor of div to a random color
let rainbowToggle;
function rainbow(){
    colorToggle = false;
    darkenToggle = false;
    eraseToggle = false;
    rainbowToggle = true;
        divs.forEach(div => div.addEventListener("mouseenter", function rainbowPen(){
            if (rainbowToggle == true){
        div.style.backgroundColor = randomRGB();
        }
             else{
                divs.forEach(div => div.removeEventListener("mouseenter", rainbowPen));
            }
        }));
}

let darkenToggle;
function darken(){
    rainbowToggle = false;
    colorToggle = false;
    eraseToggle = false;
    darkenToggle = true;
    divs.forEach(div => {
        var color = div.style.backgroundColor;
        var nums = color.slice(4, color.length - 1);
        var initValues = nums.split(", ");
        const R = Number(initValues[0]);
        const G = Number(initValues[1]);
        const B = Number(initValues[2]);
        let i = 0;
        

        div.addEventListener("mouseenter", function darken(){
            if (darkenToggle == true){
                i++;
                if (i < 11){
                    r = R - i*(R * .1);
                    g = G - i*(G * .1);
                    b = B - i*(B * .1);
                    div.style.backgroundColor = 'rgb(' + r +', ' + g + ', ' + b + ')';
                }
                else{
                    div.removeEventListener("mouseenter", darken);
                }
            }
            else{
                div.removeEventListener("mouseenter", darken);
                }
            });
    });
}

let eraseToggle;
function erase(){
    eraseToggle = true;
    darkenToggle = false;
    colorToggle = false;
    rainbowToggle = false;
    divs.forEach(div => {
        div.addEventListener("mouseenter", function erase(){
            if (eraseToggle == true){
                div.style.backgroundColor="";
            }
            else{
                div.removeEventListener("mouseenter", erase);
            }
        })});
    }

    
squares(size);