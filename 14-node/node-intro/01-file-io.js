// recreate the cat program in JS

const fs = require('fs'); // This is from the Node.js Standard Library

// Synchronous
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8'); // blocking
// console.log(fileData);

// Asynchronous IO
// Better efficiency because it's non-blocking.
// Error first pattern:
// Callback function in Node.js usually get:
//   1. error param (null if no error occurred)
//   2. data param

fs.readFile('flintstones.txt', 'utf-8', function (error, data) {
  if (error) {
    return console.error(error); // This is a bit wanky.
  }
  console.log('data', data);
});
console.log('you will probably see this first');

// TODO: Rewrite this code using Promises.
