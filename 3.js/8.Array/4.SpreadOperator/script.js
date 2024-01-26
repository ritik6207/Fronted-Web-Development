"use strict"

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

//using spread operator combine two different array in single array
let nums = [...odd, ...even];

nums.forEach(function(ele){
    document.write(ele + " ");
});