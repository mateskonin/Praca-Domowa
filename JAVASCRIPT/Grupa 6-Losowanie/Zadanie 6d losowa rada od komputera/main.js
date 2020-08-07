const sentences = [];
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');

const addSentnces = (e) => {
    e.preventDefault();
    const sentence = input.value;
    for(let i = 0; i< sentences.length; i++){
        if(sentences[i] == input.value){
            return
        }
    }
   
    sentences.push(sentence);
    console.log(sentences);
    input.value = "";
};

const delSentnces = (e) => {
    e.preventDefault();
    sentences.length = 0; //sentences.splice(0, sentences.length);
    console.log(sentences);
}

const showSentnces = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * sentences.length);
    h1.innerHTML = sentences[randomIndex];
}

const showPossibility = () => {
    alert(sentences);
}

btn1.addEventListener('click', addSentnces);
btn2.addEventListener('click', delSentnces);
btn3.addEventListener('click', showSentnces);
btn4.addEventListener('click', showPossibility);