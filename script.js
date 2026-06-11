let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        display.value = expression + " = " + result;
    } catch {
        display.value = "Error";
    }
}