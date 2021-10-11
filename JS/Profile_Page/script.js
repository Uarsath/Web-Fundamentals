var CR = 2;
var CRElement = document.querySelector("#circle");

var YR = 400;
var YRElement = document.querySelector("#oval");

var nameElement = document.querySelector("#name");

function decrement() {
    CR--;
    CRElement.innerText = CR;
}

function increment() {
    YR++;
    YRElement.innerText = YR;
    CR--;
    CRElement.innerText = CR;
}

function editName() {
    nameElement.innerHTML = "Samael Thalik";
}