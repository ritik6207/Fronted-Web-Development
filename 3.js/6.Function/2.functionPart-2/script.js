let multiply = function(x , y){
    let p = x * y;
    return p;
};

let add = function(x , y){
    let sum = x + y;
    return sum;
};

let a = 5, b = 20;

function action(x, y, z){
    let r = z (x , y);
    return r
}

let r = action(a, b, add);
document.write(r);