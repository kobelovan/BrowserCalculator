function AC() {
    document.getElementById("display").innerHTML = "";
}


function num0() {
    document.getElementById("display").innerHTML = 0;
}

function num1() {
    document.getElementById("display").innerHTML = 1;
}

function num2() {
    document.getElementById("display").innerHTML = 2;
}


function num3() {
    document.getElementById("display").innerHTML = 3;
}


function num4() {
    document.getElementById("display").innerHTML = 4;
}


function num5() {
    document.getElementById("display").innerHTML = 5;
}


function num6() {
    document.getElementById("display").innerHTML = 6;
}


function num7() {
    document.getElementById("display").innerHTML = 7;
}


function num8() {
    document.getElementById("display").innerHTML = 8;
}


function num9() {
    document.getElementById("display").innerHTML = 9;
}

//addition 
function add(num1, num2) {
    let res = num1 + num2;
    document.getElementById("display").innerHTML = res;
}

//subtraction
function sub(num1, num2) {
    let res = num1 - num2;
    document.getElementById("display").innerHTML = res;
}

//division
function divide(num1, num2) {
    let res = num1 / num2;
    document.getElementById("display").innerHTML = res;
}

//multiplication
function multiply(num1, num2) {
    let res = num1 * num2;
    document.getElementById("display").innerHTML = res;
}

function storeVar(value) {
    let amount = value;
    console.log(amount);
}

//determines which operator to execute
function operate(op, num1, num2) {
    if (op == "+") {
        add(num1, num2);
    } else if (op == "-") {
        sub(num1, num2);
    } else if (op == "/") {
        divide(num1, num2);
    } else if (op == "*") {
        multiply(num1, num2);
    } else {
        console.log("");
    }
}


