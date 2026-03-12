console.log("connected");

var resultShown = false;

function pressValue(value) {
  const display = document.getElementById("display");

  if (resultShown == true) {
    display.value = "";
    resultShown = false;
  }

  display.value = display.value + value;

  document.getElementById("calcErr").innerHTML = "";
  return false;
}

function deleteLast() {
  const display = document.getElementById("display");

  if (resultShown == true) {
    return false;
  }

  if (display.value.length > 0) {
    display.value = display.value.substring(0, display.value.length - 1);
  }

  return false;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("calcErr").innerHTML = "";
  resultShown = false;

  return false;
}

function calculateResult() {
  const display = document.getElementById("display").value;

  if (!display) {
    document.getElementById("calcErr").innerHTML = "Input is required";
    return false;
  }

  var operator = "";
  var firstNumber = "";
  var secondNumber = "";

  for (var i = 0; i < display.length; i++) {
    if (
      display[i] == "+" ||
      display[i] == "-" ||
      display[i] == "*" ||
      display[i] == "/"
    ) {
      operator = display[i];
      firstNumber = display.substring(0, i);
      secondNumber = display.substring(i + 1);
      break;
    }
  }

  if (!operator) {
    return false;
  }

  var num1 = Number(firstNumber);
  var num2 = Number(secondNumber);
  var result = 0;

  if (operator == "+") result = num1 + num2;
  if (operator == "-") result = num1 - num2;
  if (operator == "*") result = num1 * num2;
  if (operator == "/") result = num1 / num2;

  document.getElementById("display").value = result;

  resultShown = true;

  return false;
}