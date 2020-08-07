const chars = "ABCDEFGIJK0123456789";
//const chars = ['A','B','C','D','E','F','G','I','J','K',0,1,2,3,4,5,6,7,8,9];
const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;//ilosc kodów
const charsNumber = 10;//ilosc znaków w kodzie

const codesGenerator = () => {
    section.textContent = "";
    for(let i = 0; i<codesNumber; i++){
        let code = "";
        for (let i = 0; i<charsNumber; i++){
            const index = Math.floor(Math.random() * 20);
            code += chars[index];
        }

        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', codesGenerator)