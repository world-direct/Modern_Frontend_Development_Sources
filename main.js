'use strict';

var randomLastname = require("random-lastname");

function forceMe(){
var nameSpan = document.getElementById('name');
nameSpan.innerHTML = randomLastname() + " " +randomLastname();
}

forceMe();
window.forceMe = forceMe;
