
//INFINITY
document.write(3E310);

//NEGATIVE INFINITY
document.write(-3E310);

//Boolean 

document.write(5 > 4);
document.write(4 > 5);

//for the console
console.log(5 + 5); 

//coercion
document.write("11" + 4);

//Challenge Boolean false
console.log(10 > 11);

//Compare == true
document.write(10 == 10);

//Compare == false
document.write(10 == 1);

//Compare matching data type = true
document.write(20 === 20);

//Compare different data type with different value = false
document.write("go" === 5);

//compare different data type but same value for both = false
document.write("23" === 23);

//Compare same data type but different value for both = false
document.write("dog" === "dogs");

//AND operator both need to be true
document.write(12 > 11 && 23 > 22);//returns true
document.write(12 > 11 && 23 < 22);//returns false

//OR operator one or the other needs to be true
document.write(12 > 11 || 23 < 22);// returns true because at least one is true
document.write(12 < 11 || 23 < 22);// returns false


//NOT operator

function not_Function() {
    document.getElementById("not").innerHTML = ! (10 < 5);//Returns true
}

function not_Function_2() {
    document.getElementById("not_2").innerHTML = ! (10 > 5);//returns false
}




