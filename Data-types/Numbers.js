'use strict'
/*
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
The resulting value must be returned as a number.
The visitor can also stop the process by entering an empty line or pressing “CANCEL”.
 In that case, the function should return null.
*/


function readNumber () {
    let number;

    do {
        number = prompt("Input number");
    }
    while (!isFinite(number));

    if (number === null || number === ""){
        return null;
    }
    else {
        return +number;
    }  
}

alert(`${readNumber()}`);



/* 
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
Write the function random(min, max) to generate a random floating-point number,
from min to max (not including max).
*/


function getRandomNumber(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert(getRandomNumber(0, 1) );
 


 /* 
 Create a function randomInteger(min, max) that generates a random integer number,
 from min to max including both min and max as possible values.
 Any number from the interval min..max must appear with the same probability.
*/


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  alert( randomInteger(1, 10) );

