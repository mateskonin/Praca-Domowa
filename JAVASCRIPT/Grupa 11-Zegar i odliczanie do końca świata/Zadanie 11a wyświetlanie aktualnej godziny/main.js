const time = ()=> {
    let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
const secund = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
document.querySelector('div').textContent = `${hour}:${minute}:${secund}`;
}
setInterval(time,1000)


