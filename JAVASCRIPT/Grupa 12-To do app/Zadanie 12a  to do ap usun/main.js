const button = [...document.querySelectorAll('button')];
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', ()=> {
        //button[i].parentNode.remove();
        button[i].parentNode.style.textDecoration = 'line-through';
        button[i].remove();
    })
}

// const removeTask = (e) => {
//     e.target.parentNode.remove();//parentNode wskazuje rodzica, w tym wypadku rodzicem button jest li
// }

// document.querySelectorAll('button').forEach(item=> item.addEventListener('click', removeTask))