//Math.random() * (6 - 4) + 4;

//Funkcja uniwerslana
const numberRandom = (min,max) => {
    const number = Math.random() * (max-min) + min;
    return number;
}
document.addEventListener('mousemove', () => {
    console.log(numberRandom(20,400));
} );

//liczby całkowite Math.floor(Math.random() * (max-min+1) + min;)
