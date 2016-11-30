var domWriter = require('domWriter.js');
var calculator = require('calculator.js');

function calculate() {
    var addResult = calculator.add(100, 400);
    domWriter.write('add-result', addResult);

    var multiplicationResult = calculator.multiply(4, 8);
    domWriter.write('multiplication-result', multiplicationResult);

    var moduloResult = calculator.modulo(25, 4);
    domWriter.write('modulo-result', moduloResult);
};

exports.calculate = calculate;

document.querySelector("#button").addEventListener("click", calculate);