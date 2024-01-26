//create object with the help of new keyword
let car = new Object();
car.name = "Houndai";
car.model = "i12";
car.year = "2015";
car.display = function(){
    document.write(this.name + this.model + this. year);
}

document.write(car.name);