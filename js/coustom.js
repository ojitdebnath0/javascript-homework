function addition(x,y){
    var all = x + y;
    document.getElementById("result").innerHTML = all;
}

function subtraction(x,y){
    var all = x - y;
    document.getElementById("subtraction").innerHTML = all;
}

function multiplication(x,y){
    var all = x * y;
    document.getElementById("multiplication").innerHTML = all;
}

function divison(x,y){
    var all = x / y;
    document.getElementById("divison").innerHTML = all;
}

function modulus(x,y){
    var all = x / y;
    var modulus = Math.round(all);
    document.getElementById("modulus").innerHTML = modulus;
}
 function modulusUp(x,y){
     var all = x / y;
     var modulusUp = Math.ceil(all);
     document.getElementById("modulusUp").innerHTML = modulusUp;
 }
 function modulusDown(x,y){
     var all = x / y;
     var modulusDown = Math.floor(all);
     document.getElementById("modulusDown").innerHTML = modulusDown;
 }

// var textarea = document.getElementById("textarea");
// var counter = document.getElementById("counter");

function totalCounter(){
    var allChar = textarea.value.length;
    counter.innerHTML = allChar;
    var limit = 200;
    var remin = limit - allChar;
    remain.innerHTML = remin;
}
