function my_Dictionary(){
    var Car = {
        Brand: "Ford",
        Model: "F-150",
        Year: 2012,
        Color: "Silver",
    };
    document.getElementById("dictionary").innerHTML = Car.Year;
}

function my_Dictionary_identical_Keys(){
    var Car = {
        Brand: "Ford",
        Brand: "F-150",
        Year: 2012,
        Color: "Silver",
    };
    delete Car.Brand;
    document.getElementById("dictionary_2").innerHTML = Car.Brand;
}

