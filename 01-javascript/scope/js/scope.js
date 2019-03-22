// Global Scope ////////////////////////////////////////////////////////////////
const message = "Hello World";

const showMessage = function () {
  console.log( message ); // This function has access to the global variable.
};

showMessage();

// Local or function scope /////////////////////////////////////////////////////
const showLocalMessage = function () {
  const localMessage = 'Goodbye Cruel World';
  console.log( localMessage ); // This function has access to the local variable.
};

showLocalMessage();
// console.log( localMessage ); // localMessage has gone out of scope.

// var inside a block //////////////////////////////////////////////////////////
if (23 === 23) {
  var hotdogs = 'with barbeque sauce'; // global variable
  console.log( hotdogs );
};
console.log( hotdogs ); // hotdogs var is still visible outside of the block.

// let inside a block //////////////////////////////////////////////////////////
if (23 === 23) {
  let goldfish = true; // block scope.
  console.log( goldfish );
};
// console.log( goldfish ); // goldfish has gone out of scope

// Here j has block scope and won't hang around after the loop is done.
for (let j = 0; j < 15; j++) {
  console.log('here is your j', j);
};

// const inside a block ////////////////////////////////////////////////////////
// const has block scope too (the same as a let)
if (23 === 23) {
  const password = 'swordfish';
  console.log( password );
}
