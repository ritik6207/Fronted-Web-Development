"use strict";
let el = document.getElementById("abc");

el.onclick = function() {
    el.innerHTML = "This paragraph will be change in Inner HTML";
    el.style.color = "red";
};