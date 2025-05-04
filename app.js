// glbals
//__dirname - path to current directory
//__filename - filename
//require- function to use modules(ommon js)
//module - info about current file
//process - info about env where the program is being executed.
const names = require("./names")
const sayHi = require("./utils")
console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter)

