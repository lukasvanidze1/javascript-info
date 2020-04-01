'use strict'

// Create a calculator.

let calculator = {
   firstNumber: 0,
   secendNumber: 0,
    read() {
        this.firstNumber = +prompt("Input first number");
        this.secendNumber = +prompt("Input secend Number");
        
    },

    sum() {
        return (this.firstNumber + this.secendNumber);
    },

    mul() {
        return (this.firstNumber * this.secendNumber);
    }

};

calculator.read();
alert (calculator.sum());
alert (calculator.mul());


// Chaining

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  };

ladder.up().up().down().showStep();
