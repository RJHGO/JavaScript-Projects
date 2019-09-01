function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if  (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
     getExtra(runningTotal,text1);
      
};

function getExtra (runningTotal,text1) {
    var extraTotal = 0;
    var selectedExtra = [];
    var extraArray = document.getElementsByClassName("extras");
    for (var j = 0; j < extraArray.length; j++) {
        if (extraArray[j].checked) {
            selectedExtra.push(extraArray[j].value);
            console.log("selected Extra item: ("+extraArray[j].value+")");
            text1 = text1+extraArray[j].value+"<br>";    
        }
    }
    var extraCount = selectedExtra.length;
    if (extraCount > 1) {
        extraTotal = (extraCount - 1);
    } else {
        extraTotal = 0;
    }
    runningTotal = (runningTotal + extraTotal);
    console.log("total selected extra items: "+extraCount);
    console.log(extraCount+" extra - 1 free extra = "+"$"+extraTotal+".00");
    console.log("extra text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"
    +runningTotal+".00"+"</strong></h3>";

};

