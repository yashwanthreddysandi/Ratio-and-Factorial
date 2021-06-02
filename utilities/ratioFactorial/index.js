let factorialOfNumber = require("../factorial/index.js");

let ratioOfTwoNumbers = require("../ratio/index.js");

let ratioAndFactorial = function (num1, num2, num3) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);
  let result = {
    ratio: ratio,
    factorial: factorial,
  };
  return result;
};

module.exports = ratioAndFactorial;
