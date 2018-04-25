//Converting Euro to Sterling
function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);
  
  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
 
}

//Converting Euro to Us Dollars 
function euroToDollars(){

  var amount = parseInt(document.getElementById("value1").value);
  
  //Changed the exchange rate to 1.06
  var dollars = amount * 1.06;
  var message = amount + ' euros converts to ' + dollars + ' dollars.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  
}

//Converting Euro to Japanese Yen
function euroToYen(){

  var amount = parseInt(document.getElementById("value1").value);
  
   //Changed the exchange rate to 121.12
  var Yen = amount * 121.12;
  var message = amount + ' euros converts to ' + Yen + ' Yen.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  
}

//Converting Euro to Bitcoin
function euroToBitcoin(){

  var amount = parseInt(document.getElementById("value1").value);
  
   //Changed the exchange rate to 0.00082
  var Bitcoin = amount * 0.00082;
  var message = amount + ' euros converts to ' + Bitcoin + ' Bitcoin.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}