"use strict";
var logger_1 = require('./logger');
var calculator;
(function (calculator) {
    function add(summand1, summand2) {
        logger_1.logger.log("Add " + summand1 + "+" + summand2);
        return summand1 + summand2;
    }
    calculator.add = add;
    function multiply(factor1, factor2) {
        logger_1.logger.log("Multiply " + factor1 + "*" + factor2);
        return factor1 * factor2;
    }
    calculator.multiply = multiply;
    function modulo(dividend, divisor) {
        logger_1.logger.log("Modulo " + dividend + "%" + divisor);
        return dividend % divisor;
    }
    calculator.modulo = modulo;
})(calculator = exports.calculator || (exports.calculator = {}));
;
