let Car = function(make , model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.display = function(){
        document.write(this.make + this.model + this.year);
    };
}

let car1 = new Car("kia", "i125", "2018");
let car2 = new Car("Rang Rover", "i435", "2019");

document.write(car1.make + " , " + car1.model + " , " + car1.year);
document.write("<br>")
document.write(car2.make + " , " + car2.model + " , " + car2.year);