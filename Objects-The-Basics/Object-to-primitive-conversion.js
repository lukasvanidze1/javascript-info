'use strict'

// Symbol.toPrimitive.

let human = {
    name: "Luka",
    age: 26,


    [Symbol.toPrimitive](hint) {

        return hint == "string" ? `name: ${this.name}` : this.age;
    }
};

alert (human);
alert (+human);
alert (human + 500);


// toString(), typeOf().

let city = {
    name: "Rustavi",
    year: 72,
  
    toString() {
      return `name: ${this.name}`;
    },
  
    valueOf() {
      return this.year;
    }
  
  };
  
  alert(city); 
  alert(+city); 
  alert(city + 500); 

