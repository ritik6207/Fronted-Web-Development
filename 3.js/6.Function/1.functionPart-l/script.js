"use strict"

let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

//Anonymous Funnction

let multiply = function(a , b){
    let m = a * b;
    return m;
};


let r = multiply(a, b);
document.write(r);

// function get_Max(a , b) {
//     if(a > b){
//         return a;
//     }else{
//         return b;
//     }
// }

// let max = get_Max(a, b);
// document.write(max)