const slideList = [{
        img: "images/img1.jpg",
        text: "Pierwszy test",
    },
    {
        img: "images/img2.jpg",
        text: "Drugi test",
    },
    {
        img: "images/img3.jpg",
        text: "Trzeci test",
    }
];

const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];

const time = 1000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

const changeSlide = () => {


    active++;
    if (active == slideList.length) {
        active = 0;
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();

}
setInterval(changeSlide, time)

