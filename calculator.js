// Calculator
function Calculator() {
  this.firstValue = 0;
  this.currentValue = 0;
  this.operation = null;

  this.add = function () {
    this.currentValue += this.firstValue;
    alert(this.currentValue)
  }

  this.subtract = function () {
    this.currentValue -= this.firstValue;
    alert(this.currentValue)
  }

  this.multiply = function () {
    this.currentValue *= this.firstValue;
    alert(this.currentValue)
  }

  this.divide = function () {
    this.currentValue /= this.firstValue;
    alert(this.currentValue)
  }
}

const calculator = new Calculator();

function checkOptions() {
  try {
    const number1 = parseInt(prompt("Enter a number"));
    const number2 = parseInt(prompt("Enter another number"));

    if (number1 && number2) {
      calculator.firstValue = number1;
      calculator.currentValue = number2;
    }

    const operation = prompt("Enter an operation (+, *, -, or /)");

    if (operation === "+") {
      calculator.add();
    } else if (operation === "-") {
      calculator.subtract();
    } else if (operation === "*") {
      calculator.multiply();
    }
    else if (operation === "/") {
      calculator.divide();
    }

  }
  catch (error) {
    alert(error);
  }

  location.reload();
}

checkOptions();