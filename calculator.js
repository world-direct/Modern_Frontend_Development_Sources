var logger = require('logger.js')

function add(summand1, summand2) {
    logger.log("Add " + summand1 + "+" + summand2);
    return summand1 + summand2;
}

function multiply(factor1, factor2) {
    logger.log("Multiply " + factor1 + "*" + factor2);

    return factor1 * factor2;
}

function modulo(dividend, divisor) {
    logger.log("Modulo " + dividend + "%" + divisor);

    return dividend % divisor;
}


exports.add = add;
exports.multiply = multiply;
exports.modulo = modulo;
