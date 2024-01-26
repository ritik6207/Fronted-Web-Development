"use strict"

let nums = [2, 4, 6, 8, 10];
let squres = nums.map(x => x * x);

squres.forEach(function(element){
    document.write(element + " ");
});