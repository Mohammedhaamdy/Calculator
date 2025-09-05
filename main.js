const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operation");

let num1, num2, prevOper, result;

// writing nums on display
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (display.value === "0") {
      display.value = btn.innerText;
    } else {
      display.value += btn.innerText;
    }
  });
});

// operation buttons
operatorButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    handleOperation(this.innerHTML);
  });
});

function handleOperation(value) {
  switch (value) {
    case "C":
      display.value = "";
      num1 = 0;
      break;
    case "←":
      display.value = display.value.slice(0, -1);
      break;
    case "+":
    case "−":
    case "/":
    case "×":
      num1 = parseFloat(display.value);
      display.value = "0";
      prevOper = value;
      break;
    case "=":
      num2 = parseFloat(display.value);
      calculation();
  }
}

function calculation() {
  if (prevOper === "+") {
    result = num1 + num2;
  } else if (prevOper === "−") {
    result = num1 - num2;
  } else if (prevOper === "/") {
    if (num2 === 0) {
      result = "Error";
    } else {
      result = num1 / num2;
    }
  } else if (prevOper === "×") {
    result = num1 * num2;
  }
  if (result === undefined) {
    result = "Error";
  }
  display.value = result;
}
