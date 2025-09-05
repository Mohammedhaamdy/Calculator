const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operation");

let num1, num2, prevOper;

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
      break;
    case "←":
      display.value = display.value.slice(0, -1);
      break;
    case "+":
    case "−":
    case "/":
    case "×":
      num1 = parseInt(display.value);
      display.value = "0";
      prevOper = value;
      break;
    case "=":
      num2 = parseInt(display.value);
      calculation();
  }
}

function calculation() {
  if (prevOper === "+") {
    display.value = num1 + num2;
  } else if (prevOper === "−") {
    display.value = num1 - num2;
  } else if (prevOper === "/") {
    display.value = num1 / num2;
  } else if (prevOper === "×") {
    display.value = num1 * num2;
  }
}
