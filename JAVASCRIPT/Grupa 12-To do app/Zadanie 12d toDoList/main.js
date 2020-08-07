const form = document.querySelector('form');
const span = document.querySelector('span');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
let liMain = document.querySelectorAll('li');
span.innerHTML = liMain.length;



//Przycisk usuwania zadeklarowany w addElement
const removeItem = (e) => {
    e.target.parentNode.remove();
    liMain = document.querySelectorAll('li');
    span.innerHTML = liMain.length;
};
//Dodawanie elementu
const addElement = (e) => {

    e.preventDefault();
    if (input.value === "") return;
    const li = document.createElement('li');
    li.classList = "task";
    li.innerHTML = `${input.value} <button class="delete"> Usuń</button>`;
    ul.appendChild(li);

    input.value = '';

    liMain = document.querySelectorAll('li');
    span.innerHTML = liMain.length;

    li.querySelector('button').addEventListener('click', removeItem);
}
//Wyszukiwarka
liMain = document.querySelectorAll('li');
const searchTask = (e) => {

    const searchTest = e.target.value;
    let tasks = [...liMain];
    tasks = tasks.filter(task => task.textContent.includes(searchTest));
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li))
};

document.querySelector("input.inputSearch").addEventListener('input', searchTask);

form.addEventListener('submit', addElement);