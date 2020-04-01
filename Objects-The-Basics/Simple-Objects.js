'use strict'

/*
crate empty object user;
aad property: name;
add propert: surname;
change the value of name to Shako;
remove property name to pete;
*/

let user = {};

user.name = "Luka";

user.surname = "Svanidze";

user.name = "Shako";

delete user.name;

//if we have propert return true; otherways false;
let obj = {};

function isEmpty (obj) {
  for(let key in obj){

    return false;
  }
  return true;
}

//sum of salaries;
let salaries = {
  john: 100,
  Ann: 160,
  Pete: 130,
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert (sum);

//multiplies all numeric properties;

let human = {
  name: "luka",
  age: 26,
  height: 1.83,
  weight: 85,
}

function multiplyNumeric (sum){
  for ( let key in sum){

    if (typeof sum[key] == 'number'){
      sum[key] += 2;
    }
  }
}

multiplyNumeric(human);