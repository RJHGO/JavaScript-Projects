function All_Together(){
    var First = "I am ";
    var Second = "learning at ";
    var Third = "the Tech Academy ";
    var Fourth = "Boot Camp."
    var Merged = First.concat(Second, Third, Fourth);
    document.getElementById("The_Concat").innerHTML = Merged;
}

function extract_Method(){
    var Sentance = "This is a slice method in JavaScript!.";
    var Section = Sentance.slice(10,15);
    document.getElementById("count").innerHTML = Section;
}

function ToUpper_Function(){
    var sentance = "This toUpperMethod";
    var go = sentance.toUpperCase();
    document.getElementById("upper").innerHTML = go;
}

function tostring(){
var X = 1008;
document.getElementById("Num_to_Str").innerHTML = X.toString();
}

function Shrinked(){
    var A = 1475.434564221984
    document.getElementById("Narrowed").innerHTML = A.toPrecision(8);
}