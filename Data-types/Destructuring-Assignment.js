'use strict'


/*
Write the destructuring assignment that reads:

1. name property into the variable name.
2. years property into the variable age.
3. isAdmin property into the variable isAdmin (false, if no such property)
*/ 

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

alert (name);
alert (age);
alert (isAdmin);


/*
Create the function topSalary(salaries) that returns the name of the top-paid person.

1. If salaries is empty, it should return null.
2. If there are multiple top-paid persons, return any of them.
  P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

let salaries = {
    "john": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries) {
  
    let max = 0;
    let maxValue = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxValue = name;
      }
    }
  
    return maxValue;
  }
  
  alert (topSalary(salaries));