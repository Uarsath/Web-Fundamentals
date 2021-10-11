function increment(a) {
    var scores = a.innerText
    scores++
    a.innerText = scores
}

var seconds = 13;
var countdown = setInterval(function() {
    seconds--;
    if (seconds >= 10) {
        document.getElementById("timer").innerText = "0:" + seconds;
    } else if (seconds < 10 && seconds > 0) {
        document.getElementById("timer").innerText = "0:0" + seconds;
    }
    else if (seconds == 0) {
        document.getElementById("timer").innerHTML = "GAME OVER";
        document.getElementById("timerstuff").innerText = "";
        alert("The Ninjas have won!");
        clearInterval(countdown);
    }
}, 1000);

