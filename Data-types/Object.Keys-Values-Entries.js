'use strict'
/* Write the function sumSalaries(salaries)
   that returns the sum of all salaries using Object.values and the for..of loop.
*/ 
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function sumSalaries (sumAll) {

let sum = 0;

for (let allValue of Object.values(salaries) ){
    sum += allValue;
}

    return sum;
}   

alert (sumSalaries(salaries));


// Write a function count(obj) that returns the number of properties in the object:

let user = {
    name: 'John',
    age: 30
  };

  function count(sumKey) {
    return Object.keys(sumKey).length;
  }


  alert( count(user) );