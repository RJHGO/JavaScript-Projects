//Global variables

var x = "Cats";
function Add_Cats_1() {
    document.write("Dogs and " +  x + ".");
}

function Add_Cats_2(){
    document.write(x  + " and Dogs.");
}

Add_Cats_1();
Add_Cats_2();

//local variable

function Add_Cats_1(){
    var x = "Cats";
    document.write(x  + " and Mice.");
}
function Add_Cats_2(){
    var x ="Cats"
     document.write(x  + " and Dogs."); 
}

Add_Cats_1();
Add_Cats_2();

//local with error

function Add_Cats_1(){
    var x = "Cats";
    document.write(x  + " and Mice.");
}
function Add_Cats_2(){
    var x ="Cats"
     document.write(x  + " and Dogs."); 
}

Add_Cats_();
Add_Cats_2();

function Get_Date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Greetings").innerHTML = "How are you tody?";
    }
    }

    function This_Date(){
        if (new Date().getTime() > 16) {
            document.getElementById("The_date").innerHTML = "Its getting late!";
        }

    }

    function Your_Age_Function(){
        Your_Age = document.getElementById("Your_Age").value;
        if (Your_Age >= 18) {
        watch = " You are old enough";
        }
        else {
            watch = "You not are old enough";
        }
        document.getElementById("watch").innerHTML = watch + " to see this film!";
    }

    function Time_function(){
        var Time = new Date().getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is morning time!";
        }
        else if (Time > 12 == Time < 18) {
            Reply = "It is the afternoon.";
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }