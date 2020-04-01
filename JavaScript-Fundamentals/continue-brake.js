'use strict'

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break;

  sum += value;

}
alert( 'Sum: ' + sum );


for (let i = 0; i < 10; i++) {

    if (i % 2 == 0) continue;
  
    alert(i);
  }