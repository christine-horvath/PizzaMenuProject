//base pizza prices:

//personal: 6

//medium: 10

//large: 14

//xlarge: 16



//add to base price:

//Additional Meats (1st is complementary)

//+$1 for each additional meat item

//Additional Veggies (1st is complementary)

//+$1 for each additional veggie item

//Extra Cheese: $3 for any pizza size

//Crust: $3 for stuffed



//present the menu, retrieve patron's selection and return invoiced receipt to screen with their total purchase price when they press an "order" button



//variables defined: #wholemenu, #foodmenu, #cart, #showText, #totalPrice, #btnOrder

function getReceipt() {

    // This initializes our string so it can get passed from

    // function to function, growing line by line into a full receipt

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

    if (selectedSize === "Personal Pizza") {

        sizeTotal = 6;

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
	
	document.getElementById("sizeTotal").innerHTML="$"+sizeTotal+".00";

    getMeat(runningTotal,text1); // All three of these variables will be passed on to each function

};

function getMeat(runningTotal,text1) {

    var meatTotal = 0;

    var selectedMeat = [];

    var meatArray = document.getElementsByClassName("meats");

    for (var j = 0; j < meatArray.length; j++) {

        if (meatArray[j].checked) {

            selectedMeat.push(meatArray[j].value);

            console.log("selected meat item: ("+meatArray[j].value+")");

            text1 = text1+meatArray[j].value+"<br>";

        }

    }

    var meatCount = selectedMeat.length;

    if (meatCount > 1) {

        meatTotal = (meatCount - 1);

    } else {

        meatTotal = 0;

    }

    runningTotal = (runningTotal + meatTotal);

    console.log("total selected meat items: "+meatCount);

    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");

    console.log("meat text1: "+text1);

    console.log("Purchase Total: "+"$"+runningTotal+".00");

    document.getElementById("showText").innerHTML=text1;
	
	document.getElementById("meatTotal").innerHTML="$"+meatTotal+".00";

    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

    getVeggies(runningTotal,text1);

};

function getVeggies(runningTotal,text1) {

    var veggiesTotal = 0;

    var selectedVeggies = [];

    var veggiesArray = document.getElementsByClassName("veggies");

    for (var k = 0; k < veggiesArray.length; k++) {

        if (veggiesArray[k].checked) {

            selectedVeggies.push(veggiesArray[k].value);

            console.log("selected veggies item: ("+veggiesArray[k].value+")");

            text1 = text1+veggiesArray[k].value+"<br>";

        }

    }

    var veggiesCount = selectedVeggies.length;

    if (veggiesCount > 1) {

        veggiesTotal = (veggiesCount - 1);

    } else {

        veggiesTotal = 0;

    }

    runningTotal = (runningTotal + veggiesTotal);

    console.log("total selected veggies items: "+veggiesCount);

    console.log(veggiesCount+" veggies - 1 free veggies = "+"$"+veggiesTotal+".00");

    console.log("veggies text1: "+text1);

    console.log("Purchase Total: "+"$"+runningTotal+".00");

    document.getElementById("showText").innerHTML=text1;
	
	document.getElementById("veggiesTotal").innerHTML="$"+veggiesTotal+".00";

    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

    getCheese(runningTotal,text1);

};

function getCheese(runningTotal,text1) {

    var cheeseTotal = 0;

    var cheeseArray = document.getElementsByClassName("cheese");

    for (var i = 0; i < cheeseArray.length; i++) {

        if (cheeseArray[i].checked) {

            var selectedCheese = cheeseArray[i].value;

            text1 = text1+selectedCheese+"<br>";

        }

    }

    if (selectedCheese === "Extra Cheese") {

        cheeseTotal = 3;

    } else if (selectedSize === "Regular") {

        cheeseTotal = 0;

    } else if (selectedSize === "No Cheese") {

        cheeseTotal = 0;

    }

    

    runningTotal = (runningTotal + cheeseTotal);

    console.log(selectedCheese+" = $"+cheeseTotal+".00");

    console.log("cheese text1: "+text1);

    console.log("Purchase Total: "+"$"+runningTotal+".00");

    document.getElementById("showText").innerHTML=text1;
	
	document.getElementById("cheeseTotal").innerHTML="$"+cheeseTotal+".00";

    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

    getCrust(runningTotal,text1);

};

function getCrust(runningTotal,text1) {

    var crustTotal = 0;

    var crustArray = document.getElementsByClassName("crust");

    for (var i = 0; i < crustArray.length; i++) {

        if (crustArray[i].checked) {

            var selectedCrust = crustArray[i].value;

            text1 = text1+selectedCrust+"<br>";

        }

    }

    if (selectedCrust === "Cheese Stuffed") {

        crustTotal = 3;

    } else if (selectedCrust === "Plain") {

        crustTotal = 0;

    } else if (selectedCrust === "Garlic Butter") {

        crustTotal = 0;

    } else if (selectedCrust === "Spicy") {

        crustTotal = 0;

    } else if (selectedCrust === "House Special") {

        crustTotal = 0;

    }

    

    runningTotal = (runningTotal + crustTotal);

    console.log(selectedCrust+" = $"+crustTotal+".00");

    console.log("crust text1: "+text1);

    console.log("Purchase Total: "+"$"+runningTotal+".00");

    document.getElementById("showText").innerHTML=text1;
	
	document.getElementById("crustTotal").innerHTML="$"+crustTotal+".00";

    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

    getSauce(runningTotal,text1);

};

function getSauce(runningTotal,text1) {

    var sauceTotal = 0;

    var sauceArray = document.getElementsByClassName("sauce");

    for (var i = 0; i < sauceArray.length; i++) {

        if (sauceArray[i].checked) {

            var selectedSauce = sauceArray[i].value;

            text1 = text1+selectedSauce+"<br>";

        }

    }

    if (selectedSauce === "Marinara") {

        sauceTotal = 0;

    } else if (selectedSauce === "White Sauce") {

        sauceTotal = 0;

    } else if (selectedSauce === "Barbeque") {

        sauceotal = 0;

    } else if (selectedSauce === "No Sauce") {

        sauceTotal = 0;

    }

    

    runningTotal = (runningTotal + sauceTotal);

    console.log(selectedSauce+" = $"+sauceTotal+".00");

    console.log("sauce text1: "+text1);

    console.log("Purchase Total: "+"$"+runningTotal+".00");

    document.getElementById("showText").innerHTML=text1;

    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

};