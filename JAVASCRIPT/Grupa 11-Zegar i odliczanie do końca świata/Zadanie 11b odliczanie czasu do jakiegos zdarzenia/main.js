const endTime = new Date('2021-04-15 15:20:00').getTime();


setInterval(() => {
    const nowTime = new Date().getTime();
    const time = (endTime - nowTime) / 1000;
    const days = Math.floor(time / 3600 / 24);
    const hours = Math.floor(time / 3600) % 24;
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time) % 60;
    document.querySelector('div').innerHTML = `dni ${days} | godziny ${hours < 10 ?     `0${hours}`: hours} | minuty ${minutes < 10 ? `0${minutes}`: minutes} | sekundy ${seconds < 10 ? `0${seconds}`: seconds}`;
}, 1000)