var display = document.getElementById("display"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    seconds = 59,
    minutes = 4,
    timeLeft;

function subtract() {
    seconds--;
    if(seconds === 0) {
        seconds = 59;
        minutes--;
    }
    timer();
}

function timer() {
    timeLeft = setTimeout(subtract(), 1000);
}
timer();

