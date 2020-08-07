let color = 0;
let color3 = 0;

const changeColor = (e) => {
    // WERSJA 1 - IF
    console.log(e.keyCode);
    if (e.keyCode == 38 && color <= 255) {
        document.body.style.backgroundColor = `rgb(${color++}, ${color++}, ${color++})`;
    } else if (e.keyCode == 40 && color >= 0) {
        document.body.style.backgroundColor = `rgb(${color--}, ${color--}, ${color--})`;
    };


    // WERSJA 2 - SWITCH

    // switch(e.keyCode){
    //     case 38:
    //         document.body.style.backgroundColor = `rgb(${color <= 255 ? color++ : color}, ${color <= 255 ? color++ : color}, ${color <= 255 ? color++ : color})`;
    //         break;
    //     case 40:
    //         document.body.style.backgroundColor = `rgb(${color >= 0 ? color-- : color}, ${color >= 0 ? color-- : color}, ${color >= 0 ? color-- : color})`;
    //         break;
    // }
};

document.body.addEventListener("keydown", changeColor);