'use strict'

/*
1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path:
  pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table),
  and bed.glasses should be 1 (found in head).

2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses?
 Benchmark if needed.
*/

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen ); // 3
  alert( bed.glasses ); // 1
  alert( table.money ); // undefined


/*
Add to the prototype of all functions the method defer(ms), that returns a wrapper,
 delaying the call by ms milliseconds.

Here’s an example of how it should work:
*/

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec