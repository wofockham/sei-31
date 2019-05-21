// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax (array, max=-Infinity) {
  if (array.length === 0) {
    return max; // End of array. We found a max.
  }

  if (array[0] > max) {
      max = array[0]; // We found a new max.
  }
  return findMax(array.slice(1), max); // Trim the array.
}

function factorial (n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}

// O(2^N)
function fibonacci (n, a=1, b=1) {
  return (n <= 2) ? b : fibonacci(n-1, b, a+b);
}

function coinFlips (tosses){
  const combinations = [];

  // define a recursive function
  const flip = function (soFar="") {
    if (soFar.length === tosses) {
      combinations.push(soFar); // base case
    } else {
      // recursive
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  };

  flip();

  return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
