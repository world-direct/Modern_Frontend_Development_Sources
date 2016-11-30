define(['./logger'],function (logger) {
    function write(selector, input) {
        logger.log("Write " + input + " to inner html of selector " + selector);
        var nameSpan = document.getElementById(selector);
        nameSpan.innerHTML = input;
    }

    return{
        write: write
    }

});
