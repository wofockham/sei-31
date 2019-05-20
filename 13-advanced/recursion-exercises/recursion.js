// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax (array, index=0, max=-Infinity) {

  const currentCandidate = array[index];

  if (currentCandidate > max) {
    max = currentCandidate;
  }

  if (index >= array.length) {
    return max; // base case.
  } else {
    return findMax(array, index+1, max);
  }
}

function factorial (n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}

// O(2^N)
function fibonacci (n, a=1, b=1) {
  return (n <= 2) ? b : fibonacci(n-1, b, a+b);
}

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
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
