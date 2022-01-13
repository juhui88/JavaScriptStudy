const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();
    var hour = String(date.getHours()).padStart(2,"0");
    var minutes = String(date.getMinutes()).padStart(2,"0");
    var second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${minutes}:${second}`;
}
getClock();
setInterval(getClock, 1000) 

