const names = ["Andrzej"];
const div = document.querySelector('div');
const btn = document.querySelector('button');


const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;
    for(i of names){//(let i -0; i < names.length; i++)
    if(i == document.querySelector('input').value){//names[i] == ...       
        return
    };}
    names.push(input);
    div.textContent = names;
    document.querySelector('input').value = "";
   
}

btn.addEventListener('click', addName);