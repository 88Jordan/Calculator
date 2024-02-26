let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (currentInput !== '') {
    operator = op;
    resultDisplayed = false;
    currentInput += ' ' + operator + ' ';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  resultDisplayed = false;
  updateDisplay();
}

function calculateResult() {
  if (operator !== '' && currentInput !== '') {
    let expression = currentInput.replace(/[^-()\d/*+.]/g, '');
    currentInput = eval(expression);
    resultDisplayed = true;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
