'use strict'

let myFavoriteTeam = prompt('What is your favorite team?', '');

switch (myFavoriteTeam) {
  case "real madrid":
    alert( "Grate choise" );
    break;

  case "barcelona":
    alert( "Ohh no" );
    break;

  case "ruventus":
  case "bayern":
  case "liverpool":
  case "manchester":  
    alert( "Not bad!" );
    break;
  default:
      alert ("i never hear that team!");
}