'use strict'


// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );


// From every anagram group should remain only one word, no matter which one.


function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );


/*
We’d like to get an array of map.keys() in a variable and then
do apply array-specific methods to it, e.g. .push.

But that doesn’t work:
*/

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

//Why? How can we fix the code to make keys.push work?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);