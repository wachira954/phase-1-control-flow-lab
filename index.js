function scuberGreetingForFeet(someValue){
  
  if(someValue <= 400){
  return "This one is on me!";
}
 else if(someValue > 2000 && someValue < 2500) {
  return "I will gladly take your thirty bucks."
  } else {
      return ("No can do.")
    }
  
}

function ternaryCheckCity(city){
  return (city == "NYC" ? "ok, sounds good." : "No go.");
  
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
    return("Thank you so much.")
    break;
    case "not as generous":
    return("Thank you.")
    break;
    default:
    return("Bye.")
  }
}