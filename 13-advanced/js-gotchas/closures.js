// const doSecretThing = function () {
//   const password = 'chicken'; // JS has function scope
//
//   console.log('I saw the password and it was ' + password);
// };
//
// doSecretThing();

// console.log( password );

const idMaker = function () {
  // set up the intial ID
  let id = 0;

  // return a function which THROUGH A CLOSURE still has access to id.
  return function () {
    return id++;
  }
};

const nextID = idMaker();

console.log( nextID() );
console.log( nextID() );
console.log( nextID() );
console.log( nextID() );

// HTML Tags
// const p = function (content) {
//   return '<p>' + content + '</p>';
// };
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// };
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// };

const tag = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`;
  }
};

const p = tag('p');
const h1 = tag('h1');
const h2 = tag('h2');

// Where you have already seen this:

// $(document).ready(function () {
//   const password = 'chicken';
//
//   $('button').on('click', function () {
//     console.log( password );
//   });
// });
//
// console.log( password );

// IIFE:
// (function () {
//   const password = 'chicken';
//   const username = 'theBlade';
//   const socketAddress = ComplexAntAwait axios.get('socketServer');
//   const protocol = Math.random();
//   complicatedFunction(password, username, socketAddress, protocol);
// })();
