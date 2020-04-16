'use strict'

// There’s an array of messages

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);  
  readMessages.add(messages[2]);
  
  alert("Read message 0: " + readMessages.has(messages[0]));
  alert("Read message 1: " + readMessages.has(messages[1])); 
  alert("Read message 2: " + readMessages.has(messages[2]));


// To store a date, we can use WeakMap:

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let dataStore = new WeakMap();
  
  dataStore.set(messages[0], new Date(2020, 11, 04));


