
function conver(a) {
    var temp = (a.value || a.options[a.selectedIndex].value);
    var ATemps = document.querySelectorAll(".temps");
    if (temp == "F") {
        for (i = 0; i < ATemps.length; i++) {
            ATemps[i].innerText = Math.round(ATemps[i].innerText * 1.8 + 32);
        }

    }
    else {
        for (i = 0; i < ATemps.length; i++) {
            ATemps[i].innerText = Math.round((ATemps[i].innerText-32) * (5/9));
        }
    }
}



