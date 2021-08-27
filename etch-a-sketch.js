const container = document.querySelector(".container");
//16 rows and 16 columns
container.style.gridTemplateColumns="repeat(16, 1fr)"
container.style.gridTemplateRows="repeat(16, 1fr)"

//create 16x16 squares
function squares(size){
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
        const box = document.createElement("div");
        //box.textContent = 'a';
        box.className ="box";
        container.appendChild(box);
        }
     }
}

//defines rows and columns of the container
function grid(size){
    container.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${size}, 1fr)`;
}

function print(){
    const divs = document.querySelectorAll(".box")
    divs.forEach(div => div.addEventListener('mouseenter', () =>{
        div.classList.add("active");
    }));
}

//addEventListener: mouseenter mouseleave

squares(16);
grid(16);
print();