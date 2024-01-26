//Arrow function

//if only one argument then write arrow function like this
/*
let x = 2;
let multiply = x => x*x;
document.write(multiply(2));
*/

//if argument is two or more 
let a = 3;
let b = 5;
let sum = (x, y) =>{
    let s = x + y;
    return s;
}
let r = sum(a, b);
document.write(r);