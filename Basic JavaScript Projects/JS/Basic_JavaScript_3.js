//Add

function myFunction(){
    var add = 10 + 11;
    document.getElementById("math").innerHTML =  add;
}
//Subtract
function my_Function(){
    var subtract = 9 - 1;
    document.getElementById("math_2").innerHTML = subtract;
}
 //Multiply
function my_Function_multiply(){
    var multiply = 5 * 20;
    document.getElementById("math_3").innerHTML = multiply;
}
//Divide
function my_Function_divide(){
    var divide = 100 / 2;
    document.getElementById("math_4").innerHTML = divide;
}
//Multiple operations
function multiple_Operations(){
    var multi_op = (5 * 20) * 10 / 2;
    document.getElementById("math_5").innerHTML = multi_op;
}

//division with Modulus (remainder)

function modulus_1(){
        var remainder = 20 % 8;
        document.getElementById("math_6").innerHTML = remainder;
}

//negation

function neg_1(){
    var x = 20;
    document.getElementById("math_7").innerHTML = -x;
}

//increment
var x = 1;
x++;
document.write(x);

//decrement
var a = 10.5;
a--;
document.write(a);

window.alert(Math.random());

window.alert(Math.random() * 100);

window.alert(Math.round(4.6));

