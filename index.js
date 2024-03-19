function scuberGreetingForFeet(ride){
  let ticket;
  if (ride <= 400) {
    ticket = "This one is on me!"
    return ticket
  }
  else if (ride >200, ride <2000) {
    ticket = "That will be twenty bucks."
    return ticket
  }
  else if (ride > 2000, ride < 2500) {
    ticket = "I will gladly take your thirty bucks."
    return ticket
  }
  else {
    ticket = "No can do."
    return ticket
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break
    case "not as generous" :
      return "Thank you."
      break
    default:
      return "Bye."
  }
}
