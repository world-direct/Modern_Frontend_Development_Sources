define([
    './domWriter',
    './logger',
    './calculator'
], function (domWriter, logger, calculator) {

    var calculate = function () {

        var addResult = calculator.add(100, 400);
        domWriter.write('add-result', addResult);

        var multiplicationResult = calculator.multiply(4, 8);
        domWriter.write('multiplication-result', multiplicationResult);

        var moduloResult = calculator.modulo(25, 4);
        domWriter.write('modulo-result', moduloResult);

    };

    return {
        calculate: calculate
    }
});


