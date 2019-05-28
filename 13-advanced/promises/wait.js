// setTimeout expects a callback -- it does not use Promises
// Wrap setTimeout in a Promise.

const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// Make this work:
// Wait returns a Promise from which we can then call .then()
wait(2000).then(() => {
  console.log('2 seconds has passed');
}).then(() => {
  console.log('also runs');
});
