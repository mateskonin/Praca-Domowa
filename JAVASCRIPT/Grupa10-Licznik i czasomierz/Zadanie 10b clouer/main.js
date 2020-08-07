const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika ${number}`
    }
}

const counter = add();
const counterFrom5 = add(5);


document.addEventListener('click', counterFrom5)