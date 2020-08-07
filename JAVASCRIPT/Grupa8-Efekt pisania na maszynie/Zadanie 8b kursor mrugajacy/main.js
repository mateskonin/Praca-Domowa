const spanText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem beatae eveniet voluptate, provident laboriosam ipsa deserunt excepturi cumque assumenda possimus fugit sit commodi dolore, repellendus porro quae maxime sapiente?'

let i = 0;
        
function addLetter(){
    spanText.textContent+=txt[i];
    i++;
    if(i == txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
const indexTyping = setInterval('addLetter()', 20);

setInterval(cursorAnimation, 400);



