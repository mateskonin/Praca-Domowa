const square = document.createElement('div');
document.body.appendChild(square);

let size=100; // wielkosc kwadratu
let grow = true;
square.style.backgroundColor="red";
document.body.style.backgroundColor="blue";

window.addEventListener("scroll",function(){

    if(size>=window.innerWidth*0.5){
        grow=false
    }
    else if(size==0){
        grow=true;
    }

    if(grow==true){
        size++;
        square.style.height=size+"px";
    square.style.width=size+"px";
  
    }
    else{
        size--;
    square.style.height=size+"px";
    square.style.width=size+"px";

    }

    
})