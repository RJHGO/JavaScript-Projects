function call_loop(){
    var Digit = "";
    var X = 1;
    while (X < 21){    
        Digit += "<br>" + X;
        X++;
}
document.getElementById("loop").innerHTML = Digit;
}

var Cars = ["Ford", "Chevy", "Dodge","Nissan", "Toyota", "Honda"];
var content = "";
var x;
function some_Cars(){
    for (x = 0; x < Cars.length; x++) {
        content += Cars[x] + "<br>";

    }
    document.getElementById("car_list").innerHTML = content;
}

function Cars_Again(){
    var autos = [];
    autos[0] = "Ford";
    autos[1] = "Chevy";
    autos[2] = "Dodge";
    document.getElementById("Array").innerHTML = "The " +
     autos[1] + " brand is a great brand with many models to choose from.";
}
  
function constant_Function(){
    const car = {type:"sports", brand:"Ferrari", model:"F-40"};
    car.type = "Exotic";
    car.model = "F355";
    document.getElementById("Cars_Again").innerHTML = "The model of the " +
     car.type + " that I drove was " + car.brand + ":" + car.model + ".";
}

var f = 55;
document.write(f);
{
    let f = 26;
    document.write("<br>" + f);
}

document.write("<br>" + f);




function addAutos(){
    var car1 = " Ford and ";
    var car2 = "Chevy.";
    var cars = car1 + car2;
    return cars;
    }
    document.write(addAutos());

    let Animal = {
        type: "Dog",
        breed: "Lab",
        age: "2",
        information : function(){
            return "The " + this.type + " a " + this.age + " year old " + this.breed;
        }
    }
    document.getElementById("Animals").innerHTML = Animal.information();

    