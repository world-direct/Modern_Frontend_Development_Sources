"use strict";
var logger_1 = require('./logger');
var domWriter;
(function (domWriter) {
    function write(selector, input) {
        logger_1.logger.log("Write " + input + " to inner html of selector " + selector);
        var nameSpan = document.getElementById(selector);
        nameSpan.innerHTML = input;
    }
    domWriter.write = write;
})(domWriter = exports.domWriter || (exports.domWriter = {}));
