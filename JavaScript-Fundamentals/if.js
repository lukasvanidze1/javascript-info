'use strict'

let yourName = prompt("say your name", "");

if (yourName == 'luka') {
    alert("welcome luka!");
  } else if (yourName == 'shalo'
   || yourName == 'dato'
   || yourName == 'levani'
   || yourName == 'gio') {
    alert( "sorry id don't know you" );
  } else {
    alert( 'wrong person!' );
  }