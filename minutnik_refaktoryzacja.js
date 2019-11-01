let time = document.getElementById("time"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    seconds = 0,
    minutes = 5,
    countingDown = null;

function padWithZero(number) {
    return ((number > 9) ? number : "0" + number);
}

function formatTime(minutes, seconds) {
    return padWithZero(minutes) + ":" + padWithZero(seconds);
}

function setTime(minutes, seconds) {
    time.innerText = formatTime(minutes,seconds);
}

function subtract() {
    seconds--;
    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }
    console.log(formatTime(minutes, seconds));
    setTime(minutes, seconds);
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
    setTime(minutes, seconds);
}
