// Promises are the evolution of callbacks: a way to handle data from async processes.
// The next evolution is async/await

// error first pattern

const fs = require('fs');

// readFile is asynchronous
// fs.readFile('flintstones.txt', 'utf-8', (err, content) => {
//   // error first pattern
//   if (err) {
//     throw err;
//   }
//
//   console.log( content );
// });

// A promise wrapper around readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });
};

// readFile('flintstones.txxxt').then((content) => {
//   console.log('This .then() callback was actually invoked under the name resolve()')
//   console.log(content);
// }).catch((error) => {
//   console.error('There was error', error);
// });

const fileReadingPromise = readFile('flintstones.txt');

fileReadingPromise.catch( (err) => {
  console.error('There was error', err);
});

fileReadingPromise.then( (content) => {
  console.log( content );
});
fileReadingPromise.then( (content) => {
  console.log('here is the content again but in upperCase');
  console.log( content.toUpperCase() );
});

console.log('other stuff');

setTimeout(function () {
  fileReadingPromise.then((content) => {
    console.log('later', content);
  });
}, 3000);

Promise.race( fileReadingPromise, ajaxPromise, otherFileReadingPromise ).then(() => {
  console.log( 'at least one thing finished');
});
