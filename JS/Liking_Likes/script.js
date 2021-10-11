var Neillike = 9;
var NeillikeElement = document.querySelector(".Neillike");

var Nicholelike = 12;
var NicholelikeElement = document.querySelector(".Nicholelike");

var Jimlike = 9;
var JimlikeElement = document.querySelector(".Jimlike");

function increment() {
    Neillike++;
    NeillikeElement.innerText = Neillike + " like(s)";
}

function increment1() {
    Nicholelike++;
    NicholelikeElement.innerText = Nicholelike + " like(s)";
}

function increment2() {
    Jimlike++;
    JimlikeElement.innerText = Jimlike + " like(s)";
}