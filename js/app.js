const input = document.querySelector(".calc-input");
const numbers = document.querySelectorAll('#num');
const add = document.getElementById('add');
const mult = document.getElementById('mult');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const reset = document.getElementById('reset');
const clear = document.getElementById('clear');
const sum = document.getElementById('sum');
// to do list
// 1 get input on keys
// 2 connect button clicks to input
// 3 enable all mathematical operations

// math operations

// reseting input
function resetFunc () {
    input.value = '';
}
// clear last input
function clearInputFunc ()  {
    let stringInput = String(input.value);
    if(stringInput.length > 1)  {
        return   input.value = (stringInput.slice(0,-1));
    }else if( stringInput.length == 1)  {
        input.value = (stringInput.slice(0,-1));
        resetFunc();
    }
}
// sum number   
function sumNumber()    {
    input.value = eval(input.value);
}
function inputNumber (e) {
    input.value = (input.value) + e.target.innerHTML;
}
numbers.forEach(num => num.addEventListener('click', inputNumber));
reset.addEventListener('click', resetFunc);
clear.addEventListener('click', clearInputFunc);
add.addEventListener('click', inputNumber);
minus.addEventListener('click', inputNumber);
mult.addEventListener('click', inputNumber);
divide.addEventListener('click', inputNumber);
sum.addEventListener('click', sumNumber);