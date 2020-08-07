document.body.addEventListener('mousemove', (event)=>{
    // //console.log(event.clientX, event.clientY);
    // document.querySelector('h1').textContent =/* `${event.clientX}, ${event.clientY}`;*/event.clientX  + " " + event.clientY;
    
    // document.body.style.backgroundColor=`rgb(${event.clientX/3}, ${event.clientY/2}, ${event.clientX/event.clientY} )`;
    
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const h1 = document.querySelector('h1');
    h1.textContent = x + " " + y;

    const red = x / width * 100;
    const blue = y / height * 100;
    const green = ((y / height * 100) + (x / width * 100)) / 2  //  x / width * 100;


    document.body.style.backgroundColor = `rgb(${red}%, ${blue}%, ${green}%)`;

})