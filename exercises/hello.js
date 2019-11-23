
//exercise-1

  function hello(name) {
      if (name == undefined){
        return ("Hello " + "World!")
      }
      else return "Hello " + name + "!";
}

console.log(hello("mustache"));
console.log(hello("Sam"));
console.log(hello());


// Exercise-2
//function madLib(name, subject) {
//  return (name + " favorite subject in school is " + subject);
//}

 //console.log(madLib("Anushka's", "art"));

 //Exercise-3

 function tipAmount(price, service) {
    if(service =="good") {
      return price * 20%
    
  
    else if(service =="fair") {
      return price * 15%
      }
    else if(service =="poor") {
      return price * 10%
    }

    console.log(tipAmount(100, "good"))
    console.log(tipAmount(40, "fair"))

