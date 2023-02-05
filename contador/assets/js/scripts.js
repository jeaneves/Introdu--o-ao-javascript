/*var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

// addEventListener
var adicionar = document.getElementById("adicionar");
var subtrair  = document.getElementById("subtrair");

adicionar.addEventListener("click",increment);
subtrair.addEventListener("click",decrement);

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;  
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

let count = 0;
const currentNumber = document.getElementById('currentNumber');
var adicionar = document.getElementById("adicionar");
var subtrair  = document.getElementById("subtrair");

adicionar.addEventListener("click",increment);
subtrair.addEventListener("click",decrement);

function increment(){
    count ++;
    currentNumber.innerHTML = count;
    if (count >=10 ) {
        adicionar.disabled = true;
        adicionar.style.color = 'gray';
    }
}

function decrement(){
    count--
    currentNumber.innerHTML = count;
    if (count <=0 ) {
        subtrair.disabled = true;
        subtrair.style.color = 'gray';
    }
}