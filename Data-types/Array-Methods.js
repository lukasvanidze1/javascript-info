'use strict'

/*
Write the function camelize(str) that changes dash-separated words like,
“my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

let longWord = "love-my-country";

function camelize(longWord) {
    return longWord
      .split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )

      .join('');
  }

  alert (camelize(longWord));


/*
  Write a function filterRange(arr, a, b) that gets an array arr,
  looks for elements between a and b in it and returns an array of them.

  The function should not modify the array. It should return the new array.
*/

  function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered );
  
  alert( arr ); 

/*
  Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes
   from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

  The function should only modify the array. It should not return anything.
*/

  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); 
  
  alert( arr ); 

//Sort in decreasing order
// one way with if 
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  }
    let arr = [5, 2, 1, -10, 8];

    arr.sort(campareNumeric());

    alert(arr);
// secend way with arrow function
  let arr = [ 5, 2, 1, -10, 8];
  arr.sort( (a, b) => b - a ) ;

  alert(arr);

/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
  }
    
  let changed = copySorted(arr);
  
  alert(changed);
  alert(arr);

/*
  You have an array of user objects, each one has user.name.
   Write the code that converts it into an array of names.
*/

let john = {
     name: "John",
     age: 25 
};
let pete = { 
    name: "Pete", 
    age: 30 
};
let mary = { 
    name: "Mary", 
    age: 28 
};

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );