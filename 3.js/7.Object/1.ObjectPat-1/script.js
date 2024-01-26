//Create object
let dog = {
    breed: 'Golden retribver',
    height: '4ft',
    age: 2,
    display: function(){
        document.write(this.breed + this.height + this.age);
    }
};

document.write(dog.breed);
document.write("<br>");
document.write(dog.height);
document.write("<br>");
document.write(dog.age);

//you can add the properties 
dog.weight = "32kg";

document.write("<br>");
document.write(dog.weight);

document.write("<br>");
//squire method
document.write(dog["breed"])