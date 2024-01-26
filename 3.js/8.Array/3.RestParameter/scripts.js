"use strict"

/*
function calculateSum(...agrs) {
    let sum = 0;
    agrs.forEach(function(element){
        sum += element;
    });
    return sum;
};
*/

//if you pass some parameter
/*
function calculateSum(a, b , ...agrs) {
    let sum = a + b;                        //firs add a + b then total sum
    agrs.forEach(function(element){
        sum += element;
    });
    return sum;
};
*/

function calculateSum(a, b , ...agrs) {
    let sum = 0;                        //if you don't add a + b then a & b discard 
    agrs.forEach(function(element){
        sum += element;
    });
    return sum;
};


let s = calculateSum(3, 5, 7, 9);  //here a = 3, b = 5
document.write(s + " ");

s = calculateSum(3, 5, 7, 9, 11);   //here a = 3, b = 5
document.write(s + " ");