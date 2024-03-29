let time = document.getElementById("time"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    seconds = 0,
    minutes = 5,
    countingDown = null;

function subtract() {
    seconds--;
    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }
    console.log(minutes + ":" + seconds);
    time.innerText = ((minutes > 9) ? minutes : "0" + minutes) + ":" + ((seconds > 9) ? seconds : "0" + seconds);
    if (seconds === 0 && minutes === 0) {
        clearInterval(countingDown);
    }
}

function timer() {
    if (countingDown === null) {
        countingDown = setInterval(subtract, 1000);
    }
}

start.onclick = timer;

stop.onclick = function() {
    clearInterval(countingDown);
    countingDown = null;
}

reset.onclick = function() {
    clearInterval(countingDown);
    countingDown = null;
    minutes = 5;
    seconds = 0;
    time.innerText = "0" + minutes +":" + "0" + seconds;
}
