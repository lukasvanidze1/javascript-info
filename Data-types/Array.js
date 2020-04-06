'use strict'

/*
Let’s try 5 array operations.

1. Create an array styles with items “Jazz” and “Blues”.
2. Append “Rock-n-Roll” to the end.
3. Replace the value in the middle by “Classics”.
     Your code for finding the middle value should work for any arrays with odd length.
4. Strip off the first value of the array and show it.
5. Prepend Rap and Reggae to the array.

6. Show all elements.
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

for (let allElem of styles){
    alert (allElem);
}


/*
      Write the function sumInput() that:

1. Asks the user for values using prompt and stores the values in the array.
2. Finishes asking when the user enters a non-numeric value,
     an empty string, or presses “Cancel”.
3. Calculates and returns the sum of array items.
*/


function sumInput () {
    let inputNumbers = [];

    while (true) {
        let value = prompt("Input numbers", 0);

        if (value === "" || value === null|| !isFinite(value)) break;

        inputNumbers.push(+value);
    }

    let sum = 0;
    for (let inputNumber of inputNumbers) {
        sum += inputNumber;
    }
    return sum;


}

alert ( sumInput() );


