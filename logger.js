var logger = function () {

    function logMessage(message) {
        console.log(message);
    }

    return {
        log: logMessage
    }

} ();
