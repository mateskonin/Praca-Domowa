document.body.addEventListener("click", (event)=>{
    const x = event.clientX;
    const y = event.clientY;

    document.querySelector('h1').innerHTML = `${x},${y}`

    if(x%2==0 && y%2==0){
        document.body.style.backgroundColor = "red"; // color = "red"
    }
    else if(x%2==1 && y%2==1){
        document.body.style.backgroundColor = "blue"; // color = "blue"
    }
    else{
        document.body.style.backgroundColor = "green"; // color = "green"
    }

    //document.body.style.backgroundColor = color;
})