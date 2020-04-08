'use strict'

//when we want to alert each element with Symbol.iterator

let range = {
    from: 1,
    to: 5,
  
  [Symbol.iterator] () {
        this.finishd = this.from;
        return this;
  },

      next() {
        if (this.finishd <= this.to) {
          return { done: false, value: this.finishd++ };
        } else {
          return { done: true };
        }
      }
    };
  
  for (let num of range) {
    alert(num);
  }
