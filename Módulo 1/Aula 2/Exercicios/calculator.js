function sum(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiplication(n1, n2) {
  return n1 * n2;
}

function division(n1, n2) {
  return n1 / n2;
}

function evenOrOdd(n1) {
  if (n1 % 2 === 0) {
    return n1 + " is even, par";
  } else {
    return n1 + " is odd, impar";
  }
}

module.exports = { sum, subtract, multiplication, division, evenOrOdd };
