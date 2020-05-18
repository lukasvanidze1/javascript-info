'use strict'

/*
1.Here’s the code with Rabbit extending Animal.

2.Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.
*/


        // Unfixed code.

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);

        // გვაკლია მეთოდი super();
          //fixed code

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name);