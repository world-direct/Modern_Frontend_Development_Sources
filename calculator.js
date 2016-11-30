define(['./logger'], function (logger) {
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

    return  { 
        add: add,
        multiply: multiply,
        modulo: modulo
    }
});