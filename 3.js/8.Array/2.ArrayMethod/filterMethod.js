"use strict";

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let even_nums = nums.filter(x => x%2 == 0);

even_nums.forEach(function(element){
    document.write(element + " ");
});