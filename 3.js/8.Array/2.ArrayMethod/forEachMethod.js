"use strict"

const arr = [2, 4, 6, 8, 10];

arr.forEach(function(element){
    document.write(element + " ");
});
document.write("<br>");
//and other way to initilized foreach loop
let printElement = (function(element){
        document.write(element + " ");
});
arr.forEach(printElement);
document.write("<br>");

//Using Arrow function 
document.write("Using Arrow function <br>");
let print =  (element) => {
    document.write(element + " ");
};
arr.forEach(print);

document.write("<br>");

arr.forEach((element) => {
    document.write(element + " ");
});