'use strict'

/*
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

Make 3 solution variants:

1. Using a for loop.
2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
3. Using the arithmetic progression formula.
*/

// using a loop
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(100));

// using recursion.
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert(sumTo(100));

// using the formula: sumTo(n) = n*(n+1)/2:
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(100));


/*
Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.
*/

//using loop
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}

printList(list);

//  Recursive solution
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    alert(list.value);

    if (list.next) {
        printList(list.next);
    }

}

printList(list);
