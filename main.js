// all clear function setting display "result" to be an empty string
function AC() {
    document.getElementById("result").value = " ";
}

function del() {
    var w = document.querySelector("result").value;
    w = str.slice(0, -1);
}

//display function -> given parameter of value
function display(value) {
    document.getElementById("result").value += value;
}

//calucation function
function calculate() {
    var numbers = document.getElementById("result").value;
    var calculation = eval(numbers);
    document.getElementById("result").value = calculation;
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


