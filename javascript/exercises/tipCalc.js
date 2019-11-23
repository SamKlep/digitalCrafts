function tipAmount(billAmount, levelOfService) {
  if (levelOfService == "good") {
    return billAmount * 0.2;
  } else if (levelOfService == "fair") {
    return billAmount * 0.15;
  } else if (levelOfService == "bad") {
    return billAmount * 0.1;
  }
}

console.log(tipAmount(10, "good"));

//--------------------------------

function totalAmount(billAmount, levelOfService) {
    return billAmount + tipAmount(billAmount, levelOfService);
  }
  
  //console.log(totalAmount(10, "good"));
  
  //--------------------------------
  
  function splitAmount(billAmount, levelOfService, numberOfPeople) {
    return totalAmount(billAmount, levelOfService) / numberOfPeople;
  }
  
  //console.log(splitAmount(100, "good", 5));