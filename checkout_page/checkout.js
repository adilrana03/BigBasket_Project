var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");

var p = document.querySelector(".qtyP");

btn1.addEventListener("click", dec);
function dec() {
    if(p.innerText != 1){
        var val = +p.innerText;
        p.innerText = val-1;
    }
}

btn2.addEventListener("click", add);
function add() {
    var val = +p.innerText;
    p.innerText = val+1;
}