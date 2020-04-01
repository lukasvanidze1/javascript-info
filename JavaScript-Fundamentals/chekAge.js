'use strict'

let age = prompt("What is your age?", "");

let welcome = (age < 18) ?
  function() { alert("Sorry just 18+!"); } :
  function() { alert("Welcome!"); };

welcome();