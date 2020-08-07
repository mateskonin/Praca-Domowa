const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna"];
const messages = ["wyjechałam na zawsze", "piękna pora roku"];

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password == text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })

    // if (password[0] == e.target.value) {
    // div.textContent = messages[0];
    // } else if (password[1] == e.target.value) {
    // div.textContent = messages[1];
    // }
    // else {
    // div.textContent = '';
    // } 
   
})

input.addEventListener('focus', () => {
    input.style.backgroundColor= "black";
    input.style.color= "white";
    // 2 opcja w css klasa active
    // e.target.classList.add('active');

})
input.addEventListener('blur', () => {
    input.style.backgroundColor= "white";
    input.style.color= "black";

})

