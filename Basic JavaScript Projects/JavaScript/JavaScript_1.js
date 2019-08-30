function choice_Function(){
    var Animal_out;
    var Animals = document.getElementById("choices").value;
    var animal_string = " is an interesting choice!";
    switch(Animals){
        case "Dog":
        Animal_out  = "Dog" + animal_string;
        break;
        case "Cat":
        Animal_out  = "Cat" + animal_string;
        break;
        case "Bird":
        Animal_out  = "Bird" + animal_string;
        break;
        case "Snake":
        Animal_out  = "Snake" + animal_string;
        break;
        default:
            Animal_out = "Please enter a choice from the list.";
    }
    document.getElementById("go").innerHTML = Animal_out;
    }
 //get element by class name method

 function myFunction(){
     var x = document.getElementsByClassName("Click");
     x[1].innerHTML = "This is the class I chose!";
 }
    
 
   
