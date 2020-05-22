'use strict'

// Rewrite this example code using async/await instead of .then/catch.

//Here we use .then and Catch.
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json')
    .catch(alert);


// Here we use Async.await

async function loadJson(url) { 
    let response = await fetch(url); 

    if (response.status == 200) {
        let json = await response.json(); 
        return json;
    }

    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert); 

// We have a “regular” function. How to call async from it and use its result?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    wait().then(result => alert(result));
  }
  
  f();