var logger = require('logger.js');

function write(selector, input) {
    logger.log("Write " + input + " to inner html of selector " + selector);
    var nameSpan = document.getElementById(selector);
    nameSpan.innerHTML = input;
}

exports.write = write;