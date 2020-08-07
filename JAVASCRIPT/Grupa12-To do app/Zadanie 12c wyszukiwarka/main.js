// USUWANIE WPISANEGO ELEMENTU
//const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// const li = [...document.querySelectorAll('li')];
// 
// input.addEventListener('keyup', () => {
//     li.map(number => {if(number.textContent == input.value){
//         number.remove();
//     }
// })})


const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');


const search = (e) => {
   const searchText = e.target.value.toLowerCase();
   let tasks = [...li];
   tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
   ul.textContent = "";
   tasks.forEach(li => ul.appendChild(li))



}

input.addEventListener('input', search);