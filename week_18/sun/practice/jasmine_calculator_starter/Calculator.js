class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  square(a) {
    return Math.pow(a, 2);
  }

  exponential(a, b) {
    return Math.pow(a, b);
  }

  isGreaterThan(a, b) {
    if(a > b) {
      return a;
    } else {
      return b;
    }
  }

  isNegative(a) {
    if(a < 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Calculator;