"use strict";
var logger;
(function (logger) {
    function log(message) {
        console.log(message);
    }
    logger.log = log;
})(logger = exports.logger || (exports.logger = {}));
