//addition
function add(num1, num2) {
    let res = num1 + num2;
    window.alert(res);
}

//subtraction
function sub(num1, num2) {
    let res = num1 - num2;
    window.alert(res);
}

//division
function divide(num1, num2) {
    let res = num1 / num2;
    window.alert(res);
}

//multiplication
function multiply(num1, num2) {
    let res = num1 * num2;
    console.log(res);
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
        console.log(" ");
    }
}
