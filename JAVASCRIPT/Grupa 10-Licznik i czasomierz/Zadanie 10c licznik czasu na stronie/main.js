
const time = () => {
    let start = 0;
    
   const second = () => {
    start++;
    document.body.textContent = `${start} sekund`;
    
   }
   setInterval(second, 1000);
   
}
time();


