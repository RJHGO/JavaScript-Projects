function Ride_Function(){
    var height, Can_ride;
    height = document.getElementById("height").value;
    Can_ride = (height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}



function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ?  "You are not old enough": "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Doge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " Manufactured in " + Erik.Vehicle_Year;
}   

function Guitar(Type, Brand, Model, String){
    this.Guitar_Type = Type;
    this.Guitar_Brand = Brand;
    this.Guitar_Model = Model;
    this.Guitar_String = String;
}

var Tom = new Guitar("Solid body", "Ibanez", "RG521QS", 6);
var Gary = new Guitar("Acoustic", "Guild", "Star", 6);
var Mary = new Guitar("Bass", "Gibson", "Thunder Bird", 4);
function Gtr_Function(){
    document.getElementById("New_and_This").innerHTML = 
    "Gary plays on a " + Gary.Guitar_Brand + " hollow-body " + Gary.Guitar_Type + " of the "
     + Gary.Guitar_String + " string variety.";
}

function w3_Function(){
    document.getElementById("adding").innerHTML = add_num();
    function add_num() {
        var begin = 0;
        function add_1_num() {begin += 1;}
        add_1_num();
        return begin;
    }
}


    
