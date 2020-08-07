const div = document.querySelector('div');
let drawActive = false;
let divX;
let divY;

div.addEventListener("mousedown", (e) => {
    div.style.backgroundColor = "gray";
    divX = e.offsetX;
    divY = e.offsetY;
    drawActive = true; //!drawActive - zmiana z false na true
});

div.addEventListener("mousemove", (event) => {
    if (drawActive) {
    const x = event.clientX - divX;
    const y = event.clientY - divY;
    
    
    div.style.top = `${y}px`; //lub usunąć kompletnie z kodu divX i divY a zamiast tego odjąć -100
    div.style.left = `${x}px`;
    }
});




div.addEventListener("mouseup", () => {
    div.style.backgroundColor = "black";
    drawActive = false; //!drawActive zmiana z true na false
});
