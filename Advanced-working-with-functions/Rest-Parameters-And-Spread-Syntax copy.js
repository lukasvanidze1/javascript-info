'use strict'

// the first two arguments go into variables and the rest go into titles array

function showName(firstName, lastName, ...arr) {
  alert(firstName + ' ' + lastName);

  alert(arr[0]);
  alert(arr[1]);
  alert(arr.length);
}

showName("Luka", "Svanidze", "one", "Two");

//Get a new copy of an object/array
// Object
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

obj.d = 4;
alert(JSON.stringify(obj));
alert(JSON.stringify(objCopy));

//Array

let arr = [1, 2, 3, 4];
let arrCopy = [...arr];

arr.push(5);

alert(arr);
alert(arrCopy);