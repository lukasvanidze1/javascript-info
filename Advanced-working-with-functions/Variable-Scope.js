'use strict'

// Write function sum that works like this: sum(a)(b) = a+b.

function sum(firstNumber) {

    return function (secendNumber) {
        return firstNumber + secendNumber;
    };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

// unfixed code!!!

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

//We can fix it by moving the variable definition into the loop:

//fixed code !!!
function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5