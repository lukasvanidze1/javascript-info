'use strict'

// constuctor function #1.
/*
function Calculator () {

    this.read = function () {
        this.firsNumber = +prompt("First Number");
        this.secendNumber = +prompt("Secend Number");
    };

    this.sum = function () {
       return this.firsNumber + this.secendNumber; 
    };


    this.mul = function () {
        return this.firsNumber * this.secendNumber;
    };
}

let calculator = new Calculator();

calculator.read();

alert("Sum = " + calculator.sum() );
alert ("Sum = " + calculator.mul() );
*/

// constructor function #2.

function Numbers (someNumber) {
    this.inpitNumber = someNumber;

    this.sumAllNumbers = function () {
        return this.inpitNumber += +prompt("Input Number");
    };
}

let number = new Numbers(1);

number.sumAllNumbers();
number.sumAllNumbers();
number.sumAllNumbers();


alert (number.inpitNumber);
