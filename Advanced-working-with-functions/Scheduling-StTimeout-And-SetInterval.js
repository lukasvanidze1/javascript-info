'use strict'

/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

1. Using setInterval.
2. Using nested setTimeout.
*/

    // setInterval
function printNumbers(from, to) {
    let firstNumber = from;

    let timeFinish = setInterval(function () {
        alert(firstNumber);
        if (firstNumber == to) {
            clearInterval(timeFinish);
        }
        firstNumber++;
    }, 1000);
}

printNumbers(5, 10);

   // setTimeout

function printNumbers(from, to) {
    let firstNumber = from;

    setTimeout(function go() {
        alert(firstNumber);
        if (firstNumber < to) {
            setTimeout(go, 1000);
        }
        firstNumber++;
    }, 1000);
}

printNumbers(5, 10);    