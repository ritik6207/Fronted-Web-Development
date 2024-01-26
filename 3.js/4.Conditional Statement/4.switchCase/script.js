"use strict"
let a = 20;
let b = 10;

let opetator = "*";

switch (opetator) {
    case "+":
        document.write(a + b);
        break;
    case "-":
        document.write(a - b);
        break;
    case "*":
        document.write(a * b);
        break;
    case "/":
        document.write(a / b);
        break;

    default:
       document.write("This operation is not yet supported:");
}
