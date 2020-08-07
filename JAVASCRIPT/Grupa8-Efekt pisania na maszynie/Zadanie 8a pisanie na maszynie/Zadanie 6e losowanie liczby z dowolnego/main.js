const spanText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem beatae eveniet voluptate, provident laboriosam ipsa deserunt excepturi cumque assumenda possimus fugit sit commodi dolore, repellendus porro quae maxime sapiente?'

let i = 0;
        
function addLetter(){
    if(i < txt.length){
    spanText.textContent+=txt[i];
    i++;
    }
}
setInterval('addLetter()', 20)



