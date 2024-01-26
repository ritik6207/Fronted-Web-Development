//Creating object using class
class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    display (){
        document.write(this.make + this.model + this.year);
    };
};

let car1 = new Car("kia", "i125", "2018");
let car2 = new Car("Rang Rover", "i435", "2019");
let car3 = new Car("tata", "i595", "2017");

// document.write(car1.make + " , " + car1.model + " , " + car1.year);
// document.write("<br>")
// document.write(car2.make + " , " + car2.model + " , " + car2.year);
// document.write("<br>")
// document.write(car3.make + " , " + car3.model + " , " + car3.year);


//Using for loop to access the data
for (let prop in car1){
    document.write(prop + " : " + car1[prop] + "<br>");
}

document.write("<br>");

for (let prop in car1){
    document.write(prop + " : " + car1[prop] + "<br>");
}