"use strict"

let modules =["HTML", "CSS", "PHP", "javascript"];

for(let element of modules){
    document.write(element + " ");
}

//insert the the element
modules.push("Node.js");

document.write("<br>");

for(let element of modules){
    document.write(element + " ");
}

//delete the element of last index
modules.pop();

document.write("<br>");

for(let element of modules){
    document.write(element + " ");
}