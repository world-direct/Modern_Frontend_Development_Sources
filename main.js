"use strict";
var domWriter_1 = require('./domWriter');
var calculator_1 = require('./calculator');
var main;
(function (main) {
    function calculate() {
        var addResult = calculator_1.calculator.add(100, 400);
        domWriter_1.domWriter.write('add-result', addResult.toString());
        var multiplicationResult = calculator_1.calculator.multiply(4, 8);
        domWriter_1.domWriter.write('multiplication-result', multiplicationResult.toString());
        var moduloResult = calculator_1.calculator.modulo(25, 4);
        domWriter_1.domWriter.write('modulo-result', moduloResult.toString());
    }
})(main || (main = {}));
// window.calculate = calculate;
