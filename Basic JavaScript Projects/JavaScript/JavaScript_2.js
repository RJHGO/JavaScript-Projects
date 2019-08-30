function validateForms(){
    var x = document.forms["Get_Info"]["firstname"]["lastname"].value;
    if (x == ""){
    alert("This section must be filled out!");
    return false;
    }
}