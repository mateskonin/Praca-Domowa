
const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const div2 = document.querySelector('.timer')
let active = false;
let counter = 0;
let set;
const start = () => {


    if (!active) {

        active = !active;
        btnStart.textContent = "Pauza";
        set = setInterval(timer, 10);


    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(set);
    }


}
const timer = () => {
    counter++;
    div2.textContent = (counter / 100).toFixed(2);
}



btnStart.addEventListener('click', start);

btnReset.addEventListener('click', () => {
    counter = 0;
    clearInterval(set);
    div2.textContent = "---";
    btnStart.textContent = "Start";
    active = !active;
})