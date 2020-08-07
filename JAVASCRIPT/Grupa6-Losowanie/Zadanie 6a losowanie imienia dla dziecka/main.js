const btn = document.querySelector("button");
const names = ["Ania", "Baska", "Cecylia", "Zofia", "Agnieszka"];
const div = document.querySelector("div");
const words = ["Najfajniejsze imię to:", "Najlepiej wybrać:", "Myślę, że najlepsze będzie:"];

btn.addEventListener("click", ()=> {
    const word = Math.floor(Math.random() * words.length);
    const name = Math.floor(Math.random() * names.length);
    div.innerHTML = words[word] +" " + names[name];
})
