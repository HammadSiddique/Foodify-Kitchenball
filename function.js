function stringLength(string) {
  if (string.length > 0 && string.length < 10) return string.length;
  return 'empty';
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength, reverseString, Calculator, capitalize,
};