'use strict'
/*
Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

Every call is saved as an array of arguments.
*/

function work(a, b) {
    alert(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    alert('call:' + args.join());
}

function f(x) {
    alert(x);
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}